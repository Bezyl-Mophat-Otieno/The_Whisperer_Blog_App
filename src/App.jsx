import TopBar from './components/topBar/TopBar';
import Home from './pages/home/Home';
import Settings from './pages/settings/Settings';
import Single from './pages/Single/Single';
import Write from './pages/write/Write';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Comments from './pages/commentpage/Comments';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import MyBlogs from './pages/myblogs/MyBlogs'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/write' element={<Write />} />
          <Route path='/myblogs' element={<MyBlogs />} />
          <Route path='/register' element={<Register />} />
          <Route path='/singlepost/:id' element={<Single />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/comments/:id' element={<Comments />} />


        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;