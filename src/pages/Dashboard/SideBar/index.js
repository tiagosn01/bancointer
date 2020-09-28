import React from 'react';
import { FiBarChart2 } from 'react-icons/fi';
import DropDown from './Dropdown';
import { sidebarNavigation } from '../../../resources';

import { Container, AmountInvested } from './styles';
import AccountBalance from './AccountBalance';

const SideBar = () => {
  return (
    <Container>
      <AccountBalance />
      <AmountInvested>
        Ver Total Investido icone <FiBarChart2 size={16} />
      </AmountInvested>
      {Object.entries(sidebarNavigation).map(([key, value]) => (
        <DropDown key={key} icon={value.icon} sectionName={key} />
      ))}
    </Container>
  );
};

export default SideBar;
