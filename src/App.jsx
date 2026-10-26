import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import ElProblema from './pages/ElProblema'
import Capacitaciones from './pages/Capacitaciones'
import Mentores from './pages/Mentores'
import Empleos from './pages/Empleos'
import MiPanel from './pages/MiPanel'
import ParaEmpresas from './pages/ParaEmpresas'
import Nosotros from './pages/Nosotros'

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="el-problema" element={<ElProblema />} />
            <Route path="capacitaciones" element={<Capacitaciones />} />
            <Route path="mentores" element={<Mentores />} />
            <Route path="empleos" element={<Empleos />} />
            <Route path="mi-panel" element={<MiPanel />} />
            <Route path="empresas" element={<ParaEmpresas />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}
