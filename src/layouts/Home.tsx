import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import { Sidebar } from '../components/Sidebar';
import Header from '../components/Header/Header';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
`;

// Ensure page content is scrollable, but the sidebar and header are not
// 60px is the height of the header
const HomeBase = styled.div`
  max-height: calc(100vh - 60px);
  overflow-y: auto;
`;

const Home = () => {
  return (
    <Grid>
      <Sidebar />
      <div>
        <Header />
        <HomeBase>
          <Outlet />
        </HomeBase>
      </div>
    </Grid>
  );
};

export { Home };
