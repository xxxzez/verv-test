import { useState } from 'react'
import { ReactComponent as ActiveCheckbox } from './assets/icons/ActiveCheckbox.svg'
import { ReactComponent as NotActiveCheckbox } from './assets/icons/NotActiveCheckbox.svg'
import { ReactComponent as MostPopularLabel } from './assets/icons/MostPopularLabel.svg'
import {
  AppContainer,
  Banner,
  BannerSubtitle,
  BannerTitle,
  CentsPerDay,
  Checkbox,
  ChoosePlanButton,
  Currency,
  PlanCost,
  PlanDescription,
  PlanItem,
  PlanListTitle,
  PlanTitle,
  PriceContainer,
  PriceDescription,
  TruncPrice,
} from './styles'
import { planItems } from './data'

export const App = () => {
  const [activePlan, setActivePlan] = useState(2)

  return (
    <AppContainer>
      <Banner>
        <BannerTitle>
          Your 3-month weight <br></br>
          loss plan
        </BannerTitle>
        <BannerSubtitle>
          Walking app to help you reach your goal.
        </BannerSubtitle>

        <PlanListTitle>Choose your plan</PlanListTitle>
        {planItems.map((planItem) => (
          <PlanItem
            key={planItem.id}
            onClick={() => setActivePlan(planItem.id)}
            isActive={activePlan === planItem.id}
          >
            <Checkbox>
              {planItem.id === activePlan ? (
                <ActiveCheckbox />
              ) : (
                <NotActiveCheckbox />
              )}
            </Checkbox>
            <PlanDescription>
              {planItem.isMostPopular && <MostPopularLabel />}
              <PlanTitle>
                {planItem.title}
                {planItem.isSpecialOffer && '⭐️'}
              </PlanTitle>
              <PlanCost isActive={activePlan === planItem.id}>
                {planItem.priceDescription}
              </PlanCost>
            </PlanDescription>
            <PriceContainer isActive={activePlan === planItem.id}>
              <Currency>$</Currency>
              <TruncPrice>{Math.trunc(+planItem.pricePerDay)}</TruncPrice>
              <CentsPerDay>
                <Currency>{planItem.pricePerDay.split('.')[1]}</Currency>
                <PriceDescription>per day</PriceDescription>
              </CentsPerDay>
            </PriceContainer>
          </PlanItem>
        ))}
        <ChoosePlanButton
          onClick={() =>
            alert(
              `${planItems[activePlan - 1].title} for ${
                planItems[activePlan - 1].priceDescription
              }`
            )
          }
        >
          Get my plan
        </ChoosePlanButton>
      </Banner>
    </AppContainer>
  )
}
