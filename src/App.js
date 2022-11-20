import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Layouts/Main';
import Blog from './components/Blog';
import CoursesMain from './components/Courses/Courses-main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Register from './components/Register';
import PageNotFound from './PageNotFound';
import CourseDetails from './components/Courses/CourseDetails';
import CourseChechOut from './components/Courses/CourseChechOut';
import PrivateRoute from './components/privateRoute/PrivateRoute';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/courses',
          element: <CoursesMain></CoursesMain>,
          loader: () => fetch('https://explore-handicraft-server-sight.vercel.app/courses')
        },
        {
          path: '/courses/:id',
          element: <CourseDetails></CourseDetails>,
          loader: ({params}) => fetch(`https://explore-handicraft-server-sight.vercel.app/courses/${params.id}`)
        },
        {
          path: '/courses/checkout/:id',
          element: <PrivateRoute><CourseChechOut></CourseChechOut></PrivateRoute>,
          loader: ({params}) => fetch(`https://explore-handicraft-server-sight.vercel.app/courses/${params.id}`)
        },
        
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '*',
          element: <PageNotFound></PageNotFound>
        },
      ]
    }
  ])
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
