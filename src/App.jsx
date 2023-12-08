import { Route, Routes } from 'react-router-dom'
import './App.css'
import FsdPage from './Pages/fsdPage'
import DataSciencePage from './Pages/dataSciencePage'
import CyberSecurityPage from './Pages/cyberSecurityPage'
import CareerPage from './Pages/careerPage'
import NoPage from './Pages/noPage'
import AllPage from './Pages/allPage'



function App() {

  //creating router pages using react-router-dom
  return (
    <Routes>
      <Route exact path="/" element={<AllPage/> }/>
      <Route path="/fsd" element={<FsdPage/>}/>
      <Route path="/dataScience" element={<DataSciencePage/>}/>
      <Route path="/cyberSecurity" element={<CyberSecurityPage/>}/>
      <Route path="/career" element={<CareerPage/>}/>
      <Route path="*" element={<NoPage/>}/>
    </Routes>
  )
}

export default App
