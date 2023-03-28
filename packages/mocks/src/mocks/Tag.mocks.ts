import {
  MOCK_GROUP_SERVICE_CATEGORYS,
  MOCK_TECH_SERVICE_CATEGORYS,
} from './ServiceCategory.mocks'
import { MOCK_GROUP_INDUSTRYS, MOCK_TECH_INDUSTRYS } from './Industry.mocks'
import { MOCK_TECH_TECHNOLOGYS } from './Technology.mocks'
import { MOCK_GROUP_SERVICES, MOCK_TECH_SERVICES } from './Service.mocks'

export const MOCK_GROUP_TAGS = [
  ...MOCK_GROUP_SERVICE_CATEGORYS,
  ...MOCK_GROUP_SERVICES,
  ...MOCK_GROUP_INDUSTRYS,
].map((item, i) => ({
  ...item,
  id: i + 1,
}))

export const MOCK_TECH_TAGS = [
  ...MOCK_TECH_SERVICE_CATEGORYS,
  ...MOCK_TECH_SERVICES,
  ...MOCK_TECH_INDUSTRYS,
  ...MOCK_TECH_TECHNOLOGYS,
].map((item, i) => ({
  ...item,
  id: i + 1,
}))

export const MOCK_TAGS = {
  GROUP: MOCK_GROUP_TAGS,
  TECH: MOCK_TECH_TAGS,
}
