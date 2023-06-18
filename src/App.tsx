import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Wizard from './pages/Wizard'
import Resumen from './pages/Resumen'

function App() { 

  return (
    <div className="d-flex align-items-center justify-content-center">
      <BrowserRouter>   
        <Routes>
          <Route path="/" element={<Wizard />} />
          <Route path="/resumen" element={<Resumen />} />
        </Routes> 
      </BrowserRouter>   
    </div>
  )
}

export default App
