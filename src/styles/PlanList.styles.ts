import styled from 'styled-components'
import { PlanActiveness } from '../types/common'
import { APP_BACKGROUNDS, APP_COLORS } from './Constants'

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

export const PlanItem = styled.div<PlanActiveness>`
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  margin-top: 16px;
  width: 331px;
  height: 80px;
  background: ${({ isActive }) =>
    isActive ? APP_BACKGROUNDS.ACTIVE_PLAN : APP_COLORS.WHITE};
  border-radius: 16px;
  border: ${({ isActive }) =>
    isActive ? '2px solid transparent' : `2px solid ${APP_COLORS.GREY}`};
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

export const PlanCost = styled.div<PlanActiveness>`
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
  background: ${APP_COLORS.BUTTON};
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
