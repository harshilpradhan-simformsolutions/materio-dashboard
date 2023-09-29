import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import { Sidebar } from '../components/Sidebar';
import Header from '../components/Header/Header';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
`;

const Home = () => {
  return (
    <Grid>
      <Sidebar />
      <div>
        <Header />
        <Outlet />
      </div>
    </Grid>
  );
};

export { Home };
