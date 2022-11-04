import styled from "styled-components";
import { ReactComponent as AvatarIcon } from "images/avatar-icon.svg";

const UserName = styled.span`
  padding: 12px;
  background: ${(props) => props.theme["pr-600"]};
  border-radius: 8px;
  font-weight: 500;
  color: #ffffff;
`;

export default function AuthorizedUser() {
  return (
    <>
      <UserName>Hello Jane!</UserName>
      <AvatarIcon />
    </>
  );
}
