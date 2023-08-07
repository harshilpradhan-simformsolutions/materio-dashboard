import { Sidebar } from './components/Sidebar';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 10px;
`;

function App() {
  return (
    <Grid>
      <Sidebar />
    </Grid>
  );
}

export default App;
