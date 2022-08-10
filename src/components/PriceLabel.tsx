import {
  CentsPerDay,
  Currency,
  PriceContainer,
  PriceDescription,
  TruncPrice,
} from '../styles/PriceLabel.styles'
import { FC } from 'react'

type PriceLabelProps = {
  isActive: boolean
  price: string
}

export const PlanLabel: FC<PriceLabelProps> = ({ price, isActive }) => {
  return (
    <PriceContainer isActive={isActive}>
      <Currency>$</Currency>
      <TruncPrice>{Math.trunc(+price)}</TruncPrice>
      <CentsPerDay>
        <Currency>{price.split('.')[1]}</Currency>
        <PriceDescription>per day</PriceDescription>
      </CentsPerDay>
    </PriceContainer>
  )
}
