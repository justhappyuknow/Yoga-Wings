import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Nav from './components/Nav';
import NavMobile from "./components/NavMobile";
import NewsLetter from './components/NewsLetter';

export default function App() {
<<<<<<< HEAD
  return (
    <>
      <Hero />
      <Cards />


      {/* <BrowserRouter>
       <Routes>
         <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
         <Route path="/header" element={<Header />} />
         <Route path="/hero" element={<Hero />} />
         <Route path="/nav" element={<Nav />} />
         <Route path="/navmobile" element={<NavMobile />} />
         <Route path="/newsletter" element={<NewsLetter />} />
       </Routes>
     </BrowserRouter>  */}
    </>
=======
  return (<>
    <Hero />
    <Blogs />
    <Contact />
    <NewsLetter />
    <Footer />
  </>
>>>>>>> 7a244f346e94db27dd81b21fa032c708c9430266
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
