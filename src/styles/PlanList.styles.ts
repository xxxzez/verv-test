import styled from 'styled-components'
import { APP_COLORS } from './Constants'

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

export const PlanPrice = styled.div`
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
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
