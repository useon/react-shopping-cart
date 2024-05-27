import styled from 'styled-components';

export const StyledConfirmationPage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 24px;
`;

export const StyledOrderSummaryContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 36px 0;
`;

export const StyledConfirmationPageTitle = styled.span`
  font-family: Noto Sans KR;
  font-size: 24px;
  font-weight: 700;
  color: rgba(0, 0, 0, 1);
`;

export const StyledConfirmationPageDescription = styled.span`
  display: flex;
  flex-direction: column;

  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 500;
  color: rgba(10, 13, 19, 1);
  gap: 0px;
`;

export const StyledCouponRedeemButton = styled.button`
  border: 1px solid #33333340;
  border-radius: 5px;
  background-color: transparent;
  font-size: 15px;

  cursor: pointer;
`;

export const StyledOrderContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  overflow-y: scroll;
`;

export const StyledConfirmationPagePriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledConfirmationPageSubTitle = styled.span`
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 700;
  color: rgba(10, 13, 19, 1);
`;

export const StyledConfirmationPagePrice = styled.span`
  font-family: Noto Sans KR;
  font-size: 24px;
  font-weight: 700;
  color: rgba(0, 0, 0, 1);
`;
