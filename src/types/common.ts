export type Plan = {
  id: number
  title: string
  priceDescription: string
  pricePerDay: string
  isMostPopular: boolean
  isSpecialOffer: boolean
}

export type PlanActiveness = {
  isActive: boolean
}
