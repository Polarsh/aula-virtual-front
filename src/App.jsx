import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import LoginPage from './pages/Sign/Login'
import SignUpPage from './pages/Sign/SignUp'
import PageLayout from './Layout/PageLayout'
import HomePage from './pages/Home'
import CoursesPage from './pages/modules/Course/Courses'
import MaterialPage from './pages/modules/videoteca/Materials'
import ErrorPage from './pages/Error'
import { AppProvider } from './context/AppContext'
import MyClassesPage from './pages/modules/videoteca/MyClasses/MyClasses'
import MyClassPage from './pages/modules/videoteca/MyClasses/MyClass'
import SchedulePage from './pages/modules/videoteca/Schedule/Schedule'

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
          <Route path='cursos' element={<CoursesPage />} />
          <Route path='videoteca/mis-clases' element={<MyClassesPage />} />
          <Route path='videoteca/mis-clases/:id' element={<MyClassPage />} />
          <Route path='videoteca/cronograma' element={<SchedulePage />} />
          <Route path='videoteca/materiales' element={<MaterialPage />} />
        </Route>
      </Routes>
    </AppProvider>
  )
}
