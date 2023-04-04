import { NextApiRequest } from 'next'
import { EnquiryTypeEnum } from './constants'
import getSlackFormats from './getSlackFormats'

const getAudienceByType = (type: EnquiryTypeEnum) => {
  switch (type) {
    case EnquiryTypeEnum.LEAD:
      return 'lead'
    case EnquiryTypeEnum.NEWSLETTER:
      return 'subscriber'
    case EnquiryTypeEnum.RESOURCE:
      return 'honey bee'
    case EnquiryTypeEnum.ENQUIRY:
    default:
      return 'enquiry'
  }
}

const getTargetSlackChannelByType = (type: EnquiryTypeEnum) => {
  switch (type) {
    case EnquiryTypeEnum.LEAD:
      return '#sales'
    case EnquiryTypeEnum.NEWSLETTER:
      return '#newsletters'
    case EnquiryTypeEnum.RESOURCE:
      return '#honeypots'
    case EnquiryTypeEnum.ENQUIRY:
    default:
      return '#enquiries'
  }
}

export interface PostEnquiryRequestBody {
  origin: string // window.location.href sent from browser
  type: EnquiryTypeEnum
  name?: string
  email?: string
  mobile?: string
  message?: string
  needs?: Array<{ key: string; value: string; label: string }>
  source?: string
  job_department?: string
  job_role?: string
  company_size?: string
}

export interface HandlePostEnquiryNextApiRequest extends NextApiRequest {
  body: NextApiRequest['body'] & PostEnquiryRequestBody
}

const handlePostEnquiry = async (req: HandlePostEnquiryNextApiRequest, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  try {
    const {
      origin,
      name,
      email,
      mobile,
      message,
      type = 'Enquiry',
      needs = [],
      source,
      job_department,
      job_role,
      company_size,
    } = req.body

    const now = new Date()
    const date = now.toDateString()
    const time = now.toTimeString()

    const payload = {
      name,
      mobile,
      email,
      message,
      date,
      time,
      source,
      needs: needs.map(({ value }) => value).join(', '),
      job_department,
      job_role,
      company_size,
    }
    const introText = `<!here> We have a new ${getAudienceByType(
      type
    )} from ${origin}! Here are the details:`
    const { payloadAsBlocks } = getSlackFormats(introText, payload)

    const channel = getTargetSlackChannelByType(type)

    const response = await fetch('https://slack.com/api/chat.postMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.SLACK_ENQUIRY_BOT_OAUTH_TOKEN}`,
      },
      body: JSON.stringify({
        icon_emoji: ':sparkles',
        channel,
        blocks: payloadAsBlocks,
      }),
    })
    const data = await response.json()

    res.status(200).json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Something went wrong' })
  }
}

export default handlePostEnquiry
