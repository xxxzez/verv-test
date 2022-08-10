import styled from 'styled-components'
import NotACtivePriceContainer from '../assets/icons/NotACtivePriceContainer.svg'
import ActivePriceContainer from '../assets/icons/ActivePriceContainer.svg'
import { APP_COLORS } from './Constants'

type PlanListItemProps = {
  isActive: boolean
}

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: 'Roboto';
`

export const BannerTitle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  font-weight: 700;
  font-size: 26px;
  line-height: 32px;
  letter-spacing: 0.41px;
  text-transform: uppercase;
  color: ${APP_COLORS.PRIMARY};
`

export const BannerSubtitle = styled.div`
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  margin: 20px 0;
`

export const PlanListTitle = styled.div`
  align-self: flex-start;

  font-weight: 700;
  font-size: 26px;
  line-height: 32px;
  letter-spacing: 0.41px;
  color: ${APP_COLORS.PRIMARY};
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
    isActive
      ? 'linear-gradient(225deg, #F66672 0%, #F32567 100%)'
      : APP_COLORS.WHITE};
  border-radius: 16px;
  border: ${({ isActive }) =>
    isActive ? '2px solid transparent' : '2px solid #d8d8d8'};
  color: ${({ isActive }) =>
    isActive ? APP_COLORS.WHITE : APP_COLORS.PRIMARY};
`

export const PlanDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const PlanTitle = styled.div` {
  display: flex;
  align-items: center;

  font-weight: 800;
  font-size: 17px;
  line-height: 22px;
  text-transform: uppercase;
  margin-bottom: 2px;
`

export const PlanCost = styled.div<PlanListItemProps>`
  font-weight: ${({ isActive }) => (isActive ? '400' : '300')};
  font-size: 12px;
  line-height: 14px;
`

export const PlanPrice = styled.div`
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
  color: ${APP_COLORS.WHITE};
`

export const PriceContainer = styled.div<PlanListItemProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;

  background: url(${({ isActive }) =>
      isActive ? ActivePriceContainer : NotACtivePriceContainer})
    no-repeat;
  width: 78.5px;
  height: 45px;
  margin-left: auto;
  margin-right: 13.5px;
  position: relative;
  color: ${APP_COLORS.PRIMARY};
  border-radius: 5px;
`

export const Currency = styled.div`
  width: 10px;
  height: 19px;

  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin-top: 8px;
`
export const TruncPrice = styled.div`
  width: 21px;
  height: 42px;
  margin-top: 2px;

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

  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
`
