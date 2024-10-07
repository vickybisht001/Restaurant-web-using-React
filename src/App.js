import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import About from './components/About ';
import Menu from './components/Menu';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Carousel />
          <Main />
          <Footer />
        </>
      )
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
          <Footer />

        </>
      )
    },
    {
      path: "/menu",
      element: [
        <>
          <Navbar />
          <Menu />
          <Footer />
        </>
      ]
    },
    {
      path: "/blog",
      element: [
        <>
          <Navbar />
          <Blog />
          <Footer />

        </>
      ]
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
          <Footer />
        </>
      )
    },

  ]);

  return <RouterProvider router={router} />;
}

export default App;
