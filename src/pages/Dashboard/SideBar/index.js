import React from 'react';
import { FiBarChart2 } from 'react-icons/fi';
import DropDown from './Dropdown';
import { sidebarNavigation } from '../../../resources';

import { Container, AmountInvested, Wrapper } from './styles';
import AccountBalance from './AccountBalance';
import HelpDesk from './HelpDesk';

const SideBar = () => {
  return (
    <Wrapper>
      <Container>
        <AccountBalance />
        <AmountInvested>
          Ver Total Investido icone <FiBarChart2 size={16} />
        </AmountInvested>
        {Object.entries(sidebarNavigation).map(([key, value]) => (
          <DropDown key={key} icon={value.icon} sectionName={key} />
        ))}
      </Container>
      <HelpDesk />
    </Wrapper>
  );
};

export default SideBar;
