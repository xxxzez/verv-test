import styled from 'styled-components'
import NotACtivePriceContainer from './assets/icons/NotACtivePriceContainer.svg'
import ActivePriceContainer from './assets/icons/ActivePriceContainer.svg'

type PlanListItemProps = {
  isActive: boolean
}

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  height: 100vh;
`
export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px 24px;
  transition: linear 0.5s;
  border-radius: 40px;
`

export const BannerTitle = styled.div`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 26px;
  line-height: 32px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.41px;
  text-transform: uppercase;
  color: #030303;
`

export const BannerSubtitle = styled.div`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  margin: 20px 0;
`

export const PlanListTitle = styled.div`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 26px;
  line-height: 32px;
  align-self: flex-start;
  letter-spacing: 0.41px;
  color: #030303;
`

export const PlanItem = styled.div<PlanListItemProps>`
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  margin-top: 16px;
  width: 331px;
  height: 80px;
  background: ${({ isActive }) =>
    isActive ? 'linear-gradient(225deg, #F66672 0%, #F32567 100%)' : '#fff'};
  border-radius: 16px;
  border: ${({ isActive }) =>
    isActive ? '2px solid transparent' : '2px solid #d8d8d8'};
  color: ${({ isActive }) => (isActive ? '#fff' : '#030303')};
`

export const PlanDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const PlanTitle = styled.div` {
  font-family: 'Roboto';
  font-weight: 800;
  font-size: 17px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  margin-bottom: 2px;
`

export const PlanCost = styled.div<PlanListItemProps>`
  font-family: 'Roboto';
  font-weight: ${({ isActive }) => (isActive ? '400' : '300')};
  font-size: 12px;
  line-height: 14px;
`

export const PlanPrice = styled.div`
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
`

export const Checkbox = styled.div`
  margin: 0 16px;
`

export const ChoosePlanButton = styled.button`
  background: #f24e5d;
  border-radius: 100px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.2px;
  width: 335px;
  height: 50px;
  border: none;
  margin-top: 20px;
  color: #ffffff;
`

export const PriceContainer = styled.div<PlanListItemProps>`
  background: url(${({ isActive }) =>
      isActive ? ActivePriceContainer : NotACtivePriceContainer})
    no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 78.5px;
  height: 45px;
  margin-left: auto;
  margin-right: 13.5px;
  position: relative;
  color: #030303;
  border-radius: 5px;
`

export const Currency = styled.div`
  width: 10px;
  height: 19px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin-top: 8px;
`
export const TruncPrice = styled.div`
  width: 21px;
  height: 42px;
  margin-top: 2px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
`
export const CentsPerDay = styled.div`
  display: flex;
  flex-direction: column;
`

export const PriceDescription = styled.div`
  width: 33px;
  height: 12px;
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
`
