import { FC } from 'react'
import { ReactComponent as ActiveCheckbox } from '../assets/icons/ActiveCheckbox.svg'
import { ReactComponent as NotActiveCheckbox } from '../assets/icons/NotActiveCheckbox.svg'
import { ReactComponent as MostPopularLabel } from '../assets/icons/MostPopularLabel.svg'
import {
  Checkbox,
  PlanCost,
  PlanDescription,
  PlanItem,
  PlanTitle,
} from '../styles/PlanList.styles'
import { PlanLabel } from './PriceLabel'
import { Plan } from '../types/common'

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
      <PlanLabel isActive={isActive} price={planItem.pricePerDay} />
    </PlanItem>
  )
}
