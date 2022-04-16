
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageNotFound from './pages/404-page/PageNotFound';
import About from './pages/about/About';
import Blogs from './pages/blogs/Blogs';
import Contact from './pages/contact/Contact';
import Header from './pages/home/components/header/Header';
import Home from './pages/home/components/home/Home';
import Services from './pages/home/components/services/Services';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
