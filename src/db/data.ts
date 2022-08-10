import { Plan } from '../types/common'

export const PlanItems: Plan[] = [
  {
    id: 1,
    title: '1-month plan',
    priceDescription: '$49.99 monthly',
    pricePerDay: '1.28',
    isMostPopular: false,
    isSpecialOffer: false,
  },
  {
    id: 2,
    title: '3-month plan',
    priceDescription: '$69.99 quarterly',
    pricePerDay: '0.83',
    isMostPopular: true,
    isSpecialOffer: false,
  },
  {
    id: 3,
    title: 'Life time',
    priceDescription: '$99.99 one time fee',
    pricePerDay: '0.55',
    isMostPopular: false,
    isSpecialOffer: true,
  },
]
