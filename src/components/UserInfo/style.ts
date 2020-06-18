import styled from 'styled-components';

import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: UI;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: var(--quaternary);

  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;
export const Avatar = styled.div`
  background-color: var(--gray);

  width: 32px;
  height: 32px;
  border-radius: 50%;

  opacity: 0.8;
`;
export const UserData = styled.div`
  display: flex;
  margin-left: 8px;
  flex-direction: column;

  > strong {
    font-size: 13px;
    color: var(--white);
    display: block;
  }
  > span {
    color: var(--gray);
    font-size: 13px;
  }
`;
export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg + svg {
    margin-left: 4px;
  }
`;
export const MicIcon = styled(Mic)`
  height: 20px;
  width: 20px;

  cursor: pointer;

  color: var(--white);
  opacity: 0.3;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }
`;
export const HeadphoneIcon = styled(Headset)`
  height: 20px;
  width: 20px;

  cursor: pointer;

  color: var(--white);
  opacity: 0.3;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }
`;
export const SettingsIcons = styled(Settings)`
  height: 20px;
  width: 20px;

  cursor: pointer;

  color: var(--white);
  opacity: 0.3;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }
`;
