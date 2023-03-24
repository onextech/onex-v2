import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { useLayout } from '@onex/providers'

export interface RenderContactLinksBlockItemsProps {}

const renderContactLinksBlockItems = () => {
  const { appConfig } = useLayout()
  const { generalEmail, generalHotline, generalWhatsappHotline } = appConfig

  return [
    {
      type: 'h5',
      title: 'Reach Us',
      titleProps: { sx: { mt: 8, mb: 2 } },
    },
    ...[
      {
        startIcon: <EmailOutlinedIcon />,
        overline: 'Submit a general inquiry',
        title: generalEmail,
        href: `mailto:${generalEmail}`,
      },
      {
        startIcon: <LocalPhoneOutlinedIcon sx={{ fill: 'green' }} />,
        overline: 'General hotline',
        title: generalHotline,
        href: `tel:${generalHotline}`,
      },
      {
        startIcon: <WhatsAppIcon style={{ fill: 'green' }} />,
        overline: 'WhatsApp',
        title: generalWhatsappHotline,
        href: `https://wa.me/${generalWhatsappHotline}`,
        titleProps: { targetBlank: true },
      },
    ]
      .map(({ startIcon, title, titleProps, overline, href }) => {
        return [
          {
            type: 'body1',
            title: overline,
            titleProps: { mt: 2 },
          },
          {
            type: 'link',
            title,
            titleProps: {
              startIcon,
              href,
              color: 'text.secondary',
              underline: 'none',
              ...titleProps,
            },
          },
        ]
      })
      .flat(),
  ]
}

export default renderContactLinksBlockItems
