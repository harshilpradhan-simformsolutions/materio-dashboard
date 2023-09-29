import KnowledgeBase from './pages/KnowledgeBase/KnowledgeBase';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Home } from './layouts/Home';
import { Profile } from './pages/Profile/Profile';

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Login />} />
      <Route path="/" element={<Home />}>
        <Route path="knowledge-base" element={<KnowledgeBase />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
