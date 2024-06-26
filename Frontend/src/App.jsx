import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mapping from './Mapping';
import Instructors from './components/Instructors';
import Blogs from '../src/components/Blogs'
import NewsLetter from './components/NewsLetter';
import Contact from './components/Contact';
import Tracker from './components/Tracker';
import UserForm from './components/UserForm';




export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mapping />}></Route>
          <Route path='/blogs' element={<Blogs />} ></Route>
          <Route path='/newsletter' element={<NewsLetter />} ></Route>
          <Route path='/contact' element={<Contact />} ></Route>
          <Route path='/instructors' element={<Instructors />} ></Route>
          <Route path='/tracker' element={<Tracker />}></Route>
          <Route path='/user-form' element={<UserForm />}></Route>

        </Routes>
      </BrowserRouter>

    </>
  );
}
