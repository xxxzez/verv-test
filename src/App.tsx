import { useState } from 'react'
import { ReactComponent as ActiveCheckbox } from './assets/icons/ActiveCheckbox.svg'
import { ReactComponent as NotActiveCheckbox } from './assets/icons/NotActiveCheckbox.svg'
import { ReactComponent as MostPopularLabel } from './assets/icons/MostPopularLabel.svg'
import {
  AppContainer,
  Banner,
  BannerSubtitle,
  BannerTitle,
  Checkbox,
  ChoosePlanButton,
  PlanCost,
  PlanDescription,
  PlanItem,
  PlanListTitle,
  PlanTitle,
  PopularLabel,
  PriceContainer,
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

        <PlanListTitle>Choose you plan</PlanListTitle>
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
              {planItem.isMostPopular && (
                <PopularLabel>
                  <MostPopularLabel />
                </PopularLabel>
              )}
              <PlanTitle>
                {planItem.title}
                {planItem.isSpecialOffer && '⭐️'}
              </PlanTitle>
              <PlanCost isActive={activePlan === planItem.id}>
                {planItem.priceDescription}
              </PlanCost>
            </PlanDescription>
            <PriceContainer isActive={activePlan === planItem.id}>
              {planItem.pricePerDay}
            </PriceContainer>
          </PlanItem>
        ))}
        <ChoosePlanButton onClick={() => console.log(activePlan)}>
          Get my plan
        </ChoosePlanButton>
      </Banner>
    </AppContainer>
  )
}
