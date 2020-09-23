import React from 'react';
import DropDown from './Dropdown';
import { dashboardNavigation } from '../../../resources';

import { Container } from './styles';

const SideBar = () => {
  return (
    <Container>
      {Object.entries(dashboardNavigation).map(([key, value]) => (
        <DropDown key={key} icon={value.icon} sectionName={key} />
      ))}
    </Container>
  );
};

export default SideBar;
