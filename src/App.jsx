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

import BankMenu from './pages/modules/Evaluation/Bank/BankMenu'

import MockMenu from './pages/modules/Evaluation/Mock/MockMenu'
import MockInstructionsPage from './pages/modules/Evaluation/Mock/MockInstructions'
import MockExamPage from './pages/modules/Evaluation/Mock/MockExam'
import ResultMockExamPage from './pages/modules/Evaluation/Mock/MockResults'
import BankInstructionsPage from './pages/modules/Evaluation/Bank/BankInstructions'
import ResultBankExamPage from './pages/modules/Evaluation/Bank/BankResults'
import BankExamPage from './pages/modules/Evaluation/Bank/BankExam'
import TutorialsPage from './pages/modules/videoteca/Tutorials'
import ManualsPage from './pages/modules/videoteca/Manuals'
import MethodologyPage from './pages/modules/Methodology/Methodology'
import TrendsPage from './pages/modules/Methodology/Trends'
import ConsultingPage from './pages/modules/Coaching/Consulting/Consulting'
import PsychologicalTestPage from './pages/modules/Coaching/PsychologicalTest/PsychologicalTest'
import TestPage from './pages/modules/Coaching/PsychologicalTest/Test'
import ResultPsychologicalPage from './pages/modules/Coaching/PsychologicalTest/Result'
import SettingsMenu from './pages/Settings/Settings'
import MyAccountPage from './pages/Settings/MyAccount'
import SecurityPage from './pages/Settings/Security'
import MyCoursesPage from './pages/Settings/MyCourses'

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

          <Route path='ajustes/' element={<SettingsMenu />}>
            <Route path='cuenta' element={<MyAccountPage />} />
            <Route path='seguridad' element={<SecurityPage />} />
            <Route path='mis-cursos' element={<MyCoursesPage />} />
          </Route>

          <Route path='videoteca/'>
            <Route path='mis-clases' element={<MyClassesPage />} />
            <Route path='mis-clases/:id' element={<MyClassPage />} />
            <Route path='tutoriales' element={<TutorialsPage />} />
            <Route path='cronograma' element={<SchedulePage />} />
            <Route path='materiales' element={<MaterialPage />} />
            <Route path='manuales-ebooks' element={<ManualsPage />} />
          </Route>

          <Route path='evaluaciones/'>
            <Route path='simulacros/'>
              <Route index element={<MockMenu />} />
              <Route
                path=':mockId/resultados'
                element={<ResultMockExamPage />}
              />
              <Route
                path=':mockId/instrucciones'
                element={<MockInstructionsPage />}
              />
              <Route
                path=':mockId/pregunta/:questionIndex'
                element={<MockExamPage />}
              />
            </Route>
            <Route path='banqueo/'>
              <Route index element={<BankMenu />} />
              <Route path='instrucciones' element={<BankInstructionsPage />} />
              <Route
                path=':bankId/resultados'
                element={<ResultBankExamPage />}
              />
              <Route
                path=':bankId/pregunta/:questionIndex'
                element={<BankExamPage />}
              />
            </Route>
          </Route>

          <Route path='metodologia/'>
            <Route path='metodologia' element={<MethodologyPage />} />
            <Route path='tendencias' element={<TrendsPage />} />
          </Route>

          <Route path='mentoria/'>
            <Route path='asesorias' element={<ConsultingPage />} />
            <Route path='test-psicologicos/'>
              <Route index element={<PsychologicalTestPage />} />
              <Route path='resultados' element={<ResultPsychologicalPage />} />
              <Route path=':testId' element={<TestPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </AppProvider>
  )
}
