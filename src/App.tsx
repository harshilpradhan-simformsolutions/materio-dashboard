import { Sidebar } from './components/Sidebar';
import styled from 'styled-components';
import KnowledgeBase from './pages/KnowledgeBase/KnowledgeBase';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/Login';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
`;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/knowledge-base"
        element={
          <Grid>
            <Sidebar />
            <div>
              <Header />
              <div className="p24">
                <KnowledgeBase />
              </div>
            </div>
          </Grid>
        }
      />
    </Routes>
  );
}

export default App;
