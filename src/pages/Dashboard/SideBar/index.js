import React from 'react';
import { FiBarChart2 } from 'react-icons/fi';
import DropDown from './Dropdown';
import { dashboardNavigation } from '../../../resources';

import { Container, AmountInvested } from './styles';
import AccountBalance from './AccountBalance';

const SideBar = () => {
  return (
    <Container>
      <AccountBalance />
      <AmountInvested>
        Ver Total Investido icone <FiBarChart2 size={16} />
      </AmountInvested>
      {Object.entries(dashboardNavigation).map(([key, value]) => (
        <DropDown key={key} icon={value.icon} sectionName={key} />
      ))}
    </Container>
  );
};

export default SideBar;
