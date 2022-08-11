import styled from 'styled-components'
import NotACtivePriceContainer from '../../assets/icons/NotACtivePriceContainer.svg'
import ActivePriceContainer from '../../assets/icons/ActivePriceContainer.svg'
import { PlanActiveness } from '../../types/common'
import { APP_COLORS } from '../../styles/Constants'

export const Currency = styled.div`
  width: 10px;
  height: 19px;

  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin-top: 10px;
  margin-left: 2px;
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
  margin-left: 2px;
  margin-top: -2px;
`

export const PriceContainer = styled.div<PlanActiveness>`
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
