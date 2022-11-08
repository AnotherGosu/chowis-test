import styled from "styled-components";
import { ReactComponent as AvatarIcon } from "images/avatar-icon.svg";
import { device } from "style/breakpoints";

const AuthorizedUserWrapper = styled.div`
  display: flex;
  gap: 11px;
  justify-self: flex-end;

  @media ${device.laptop} {
    gap: 31px;
  }
`;

const UserName = styled.span`
  padding: 12px 10px;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme["pr-600"]};
  border-radius: 8px;
  font-weight: 500;
  color: #ffffff;

  @media ${device.laptop} {
    padding: 16px 26px;
    font-weight: 700;
    font-size: 20px;
  }
`;

const StyledAvatarIcon = styled(AvatarIcon)`
  @media ${device.laptop} {
    width: 62px;
    height: 62px;
  }
`;

export default function AuthorizedUser() {
  return (
    <AuthorizedUserWrapper>
      <UserName>Hello Jane!</UserName>
      <StyledAvatarIcon />
    </AuthorizedUserWrapper>
  );
}
