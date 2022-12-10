import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Contact from './pages/Contact/Contact';
import { Toaster } from 'react-hot-toast';
import Blog from './pages/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home></Home>,
    },
    {
      path: "/contact",
      element:<Contact></Contact>,
    },
    {
      path: "/blog",
      element: <Blog></Blog>,
    },
  ]);
  return (
    <div className="">
            <Toaster />

    <RouterProvider router={router} />

    </div>
  );
}

export default App;
