import { Route, Routes, useLocation } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import PageLayout from './Layout/PageLayout'
import HomePage from './pages/videoteca/Home'
import ErrorPage from './pages/Error'
import { useEffect } from 'react'
import LoginPage from './pages/Sign/Login'
import SignUpPage from './pages/Sign/SignUp'
import MyCoursesPage from './pages/videoteca/MyCourses'
import MaterialPage from './pages/videoteca/materials'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <AppProvider>
      <ScrollToTop />
      <Routes>
        <Route path='/iniciar-sesion' element={<LoginPage />} />
        <Route path='/matricula' element={<SignUpPage />} />
        <Route path='/libro-de-reclamaciones' element={<ErrorPage />} />

        <Route path='/' element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path='*' element={<HomePage />} />
          <Route path='videoteca/mis-clases' element={<MyCoursesPage />} />
          <Route path='videoteca/materiales' element={<MaterialPage />} />
        </Route>
      </Routes>
    </AppProvider>
  )
}
