import styled from 'styled-components'
import { PlanActiveness } from '../../types/common'
import { APP_BACKGROUNDS, APP_COLORS } from '../../styles/Constants'

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

export const PlanTitle = styled.div` {
  display: flex;
  align-items: center;

  font-weight: 800;
  font-size: 17px;
  line-height: 22px;
  text-transform: uppercase;
  margin-bottom: 2px;
`

export const PlanDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Label = styled.div`
  margin-top: -2px;
  margin-left: -2px;
`

export const PlanCost = styled.div<PlanActiveness>`
  font-weight: ${({ isActive }) => (isActive ? '400' : '300')};
  font-size: 12px;
  line-height: 14px;
  margin-left: -2px;
`

export const Checkbox = styled.div`
  margin: 0 16px;
`
