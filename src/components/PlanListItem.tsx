import { ReactComponent as ActiveCheckbox } from '../assets/icons/ActiveCheckbox.svg'
import { ReactComponent as NotActiveCheckbox } from '../assets/icons/NotActiveCheckbox.svg'
import { ReactComponent as MostPopularLabel } from '../assets/icons/MostPopularLabel.svg'
import {
  CentsPerDay,
  Checkbox,
  Currency,
  PlanCost,
  PlanDescription,
  PlanItem,
  PlanTitle,
  PriceContainer,
  PriceDescription,
  TruncPrice,
} from '../styles/PlanList.styles'
import { Plan } from '../db/Data'
import { FC } from 'react'

type PlanListItemProps = {
  choosePlanHandler: (activePlan: number) => void
  isActive: boolean
  planItem: Plan
}

export const PlanListItem: FC<PlanListItemProps> = ({
  planItem,
  isActive,
  choosePlanHandler,
}) => {
  return (
    <PlanItem
      onClick={() => choosePlanHandler(planItem.id)}
      isActive={isActive}
    >
      <Checkbox>
        {isActive ? <ActiveCheckbox /> : <NotActiveCheckbox />}
      </Checkbox>
      <PlanDescription>
        {planItem.isMostPopular && <MostPopularLabel />}
        <PlanTitle>
          {planItem.title}
          {planItem.isSpecialOffer && '⭐️'}
        </PlanTitle>
        <PlanCost isActive={isActive}>{planItem.priceDescription}</PlanCost>
      </PlanDescription>
      <PriceContainer isActive={isActive}>
        <Currency>$</Currency>
        <TruncPrice>{Math.trunc(+planItem.pricePerDay)}</TruncPrice>
        <CentsPerDay>
          <Currency>{planItem.pricePerDay.split('.')[1]}</Currency>
          <PriceDescription>per day</PriceDescription>
        </CentsPerDay>
      </PriceContainer>
    </PlanItem>
  )
}
