import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './Layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import JobPage from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path='/jobs' element={<JobsPage />}></Route>
        <Route path='/jobs/:id' element={<JobPage />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}>  
    </RouterProvider>
  )
}

export default App
