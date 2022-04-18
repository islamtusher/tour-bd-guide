
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageNotFound from './pages/404-page/PageNotFound';
import About from './pages/about/About';
import Blogs from './pages/blogs/Blogs';
import Checkout from './pages/checkout/Checkout';
import Contact from './pages/contact/Contact';
import Header from './pages/home/components/header/Header';
import Home from './pages/home/components/home/Home';
import Services from './pages/home/components/services/Services';
import Login from './pages/login/Login';
import RequireAuth from './pages/RequirAuth';
import Signup from './pages/signup/Signup';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/about' element={
          <RequireAuth>
            <About></About>
          </RequireAuth>}
        >
        </Route>
        <Route path='/checkout' element={
          <RequireAuth>
             <Checkout></Checkout>
          </RequireAuth>}
        >
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
