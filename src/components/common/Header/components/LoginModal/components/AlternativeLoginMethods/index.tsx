import styled from "styled-components";
import { ReactComponent as GmailIcon } from "images/gmail-icon.svg";
import { ReactComponent as KakaoIcon } from "images/kakao-icon.svg";

const AlternativeText = styled.span`
  color: ${(props) => props.theme["gs-600"]};
`;

const AlternativeTextHighlight = styled.span`
  color: ${(props) => props.theme["pr-600"]};
`;

const AlternativeOptionsContainer = styled.div`
  padding-top: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

const AlternativeOption = styled.button`
  width: 53px;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid #eeeeee;
  background-color: transparent;
  cursor: pointer;
  transition: ${(props) => props.theme["transition-main"]};

  :hover {
    border-color: ${(props) => props.theme["gs-200"]};
  }
`;

export default function AlternativeLoginMethods() {
  return (
    <>
      <AlternativeText>
        Or
        <AlternativeTextHighlight> sign up</AlternativeTextHighlight> with Open
        account
      </AlternativeText>
      <AlternativeOptionsContainer>
        <AlternativeOption>
          <GmailIcon />
        </AlternativeOption>
        <AlternativeOption>
          <KakaoIcon />
        </AlternativeOption>
      </AlternativeOptionsContainer>
    </>
  );
}
