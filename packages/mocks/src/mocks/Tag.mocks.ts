import {
  MOCK_DATA_SERVICE_CATEGORYS,
  MOCK_DESIGN_SERVICE_CATEGORYS,
  MOCK_GROUP_SERVICE_CATEGORYS,
  MOCK_TECH_SERVICE_CATEGORYS,
} from './ServiceCategory.mocks'
import { MOCK_DATA_INDUSTRYS, MOCK_DESIGN_INDUSTRYS, MOCK_GROUP_INDUSTRYS, MOCK_TECH_INDUSTRYS } from './Industry.mocks'
import { MOCK_TECH_TECHNOLOGYS } from './Technology.mocks'
import { MOCK_DATA_SERVICES, MOCK_DESIGN_SERVICES, MOCK_GROUP_SERVICES, MOCK_TECH_SERVICES } from './Service.mocks'

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

export const MOCK_DATA_TAGS = [
  ...MOCK_DATA_SERVICE_CATEGORYS,
  ...MOCK_DATA_SERVICES,
  ...MOCK_DATA_INDUSTRYS,
].map((item, i) => ({
  ...item,
  id: i + 1,
}))

export const MOCK_DESIGN_TAGS = [
  ...MOCK_DESIGN_SERVICE_CATEGORYS,
  ...MOCK_DESIGN_SERVICES,
  ...MOCK_DESIGN_INDUSTRYS,
].map((item, i) => ({
  ...item,
  id: i + 1,
}))

export const MOCK_TAGS = {
  GROUP: MOCK_GROUP_TAGS,
  TECH: MOCK_TECH_TAGS,
}
