import { Sidebar } from './components/Sidebar';
import styled from 'styled-components';
import KnowledgeBase from './pages/KnowledgeBase/KnowledgeBase';
import Header from './components/Header/Header';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
`;

function App() {
  return (
    <Grid>
      <Sidebar />
      <div>
        <Header />
        <div className="p24">
          <KnowledgeBase />
        </div>
      </div>
    </Grid>
  );
}

export default App;
