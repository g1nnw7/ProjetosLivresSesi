import React from 'react'
import './App.css'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Contador from './components/Contador'
import Header from './components/Header'
import Calculador from './pages/Calculador'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Plano from './pages/Plano'
import Dashboard from './pages/Dashboard'
import MacroCalculador from './pages/MacroCalculador'
import CalcularIMC from './pages/CalcularIMC'
import Hero from './components/Hero'
import { Routes, Route } from 'react-router-dom'
import Section from './components/Section'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {  
  return (
    <div className='container-app'>
      {/* <Header /> */}
      {/* <Calculador/> */}
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        {/* <Route path="/" element={<Home/>} />  */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home/>}/>
        <Route path="/calculador" element={<Calculador />} />
        <Route path="/calcularimc" element={<CalcularIMC />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/quiz" element={<Quiz />} /> 
        <Route path='/planoalimentar' element={<Plano/>}/>
        <Route path="/Macro" element={<MacroCalculador />} /> 
        {/* Dashboard em testes, qualquer erro apagar todos vinculados */}
      </Routes>
    </div>
  )
}

export default App














// import React from 'react'
// import './App.css'
// import Login from './pages/Login';
// import Cadastro from './pages/Cadastro'
// import Header from './components/Header'
// import Calculador from './pages/Calculador'



// function App() {
//   return (
//     <div className='container-app'>
//       {/* <Header />
//       <Calculador/> */}
//       <Cadastro />
//       {/* <Login /> */}
//     </div>
//   )
// }

// export default App