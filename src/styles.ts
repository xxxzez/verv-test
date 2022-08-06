import styled from 'styled-components'

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
  border: 1px solid #e0e0e0;
  border-radius: 40px;
`

export const BannerTitle = styled.div`
  font-family: 'Roboto';
  font-style: normal;
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

type PlanListItemProps = {
  isActive: boolean
}

export const PlanItem = styled.div<PlanListItemProps>`
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  margin-top: 16px;
  width: 335px;
  height: 84px;
  background: ${(props) =>
    props.isActive
      ? 'linear-gradient(225deg, #F66672 0%, #F32567 100%)'
      : '#fff'};
  border-radius: 16px;
  border: ${(props) =>
    props.isActive ? '2px solid transparent' : '2px solid #d8d8d8'};
  color: ${(props) => (props.isActive ? '#fff' : '#030303')};
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
  font-style: normal;
  font-weight: ${(props) => (props.isActive ? '400' : '300')};
  font-size: 12px;
  line-height: 14px;
`

export const PlanPrice = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
`

export const PricePerDay = styled.div`
  justify-self: flex-end;
`

export const Checkbox = styled.div`
  margin: 0 16px;
`

export const PopularLabel = styled.div`
  margin-bottom: 4px;
`

export const ChoosePlanButton = styled.button`
  background: #f24e5d;
  border-radius: 100px;
  font-family: 'Roboto';
  font-style: normal;
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
  width: 78.5px;
  height: 45px;
  background: ${(props) =>
    props.isActive
      ? 'linear-gradient(245.15deg, #FFFFFF 2.81%, #F4F4F4 40.59%, #FFFFFF 83.67%)'
      : '#f0e4ea'};
  box-shadow: inset 0px 0px 50px rgba(255, 255, 255, 0.4);
  color: #030303;
`
