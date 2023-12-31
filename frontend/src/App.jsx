import './App.css';
import { UserContextProvider } from './context/UserContext';
import Layout from './components/Layout';

import IndexPage from './pages/IndexPage';
import CreatePage from './pages/CreatePage';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import EditPage from './pages/EditPage';
import RegisterPage from './pages/RegisterPage';
import {Routes , Route } from 'react-router-dom';

function App() {

  return (
   <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<IndexPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="create" element={<CreatePage />} />
      <Route path="post/:id" element={<PostPage />} />
      <Route path="edit/:id" element={<EditPage />} />
      </Route>
    </Routes>
   </UserContextProvider>
  )
}

export default App;
