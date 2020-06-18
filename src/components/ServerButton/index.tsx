import React from 'react';

import { Button } from './style';
import logo from '../../assets/logo.svg';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotification?: boolean;
  mentions?: number;
}

export const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotification,
  mentions,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotification={hasNotification}
      mentions={mentions}
      selected={selected}
    >
      {isHome && <img src={logo} alt="logo" />}
    </Button>
  );
};
