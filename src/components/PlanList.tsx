import { useState } from 'react'
import {
  Banner,
  BannerSubtitle,
  BannerTitle,
  ChoosePlanButton,
  PlanListTitle,
} from '../styles/PlanList.styles'
import { PlanItems } from '../db/data'
import { PlanListItem } from './PlanListItem'

export const PlanList = () => {
  const [activePlan, setActivePlan] = useState(2)

  const choosePlanHandler = (activePlan: number) => {
    setActivePlan(activePlan)
  }

  return (
    <Banner>
      <BannerTitle>
        Your 3-month weight <br></br>
        loss plan
      </BannerTitle>
      <BannerSubtitle>Walking app to help you reach your goal.</BannerSubtitle>

      <PlanListTitle>Choose your plan</PlanListTitle>
      {PlanItems.map((planItem) => (
        <PlanListItem
          planItem={planItem}
          key={planItem.id}
          choosePlanHandler={choosePlanHandler}
          isActive={activePlan === planItem.id}
        />
      ))}
      <ChoosePlanButton
        onClick={() =>
          alert(
            `${PlanItems[activePlan - 1].title} for ${
              PlanItems[activePlan - 1].priceDescription
            }`
          )
        }
      >
        Get my plan
      </ChoosePlanButton>
    </Banner>
  )
}
