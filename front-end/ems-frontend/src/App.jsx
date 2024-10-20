import './App.css'
import EmployComponent from './components/EmployComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {


  return (
    <>
      <BrowserRouter>

        <HeaderComponent />

        <Routes>
          <Route path='/' element={<ListEmployeeComponent />}></Route>
          <Route path='/employers' element={<ListEmployeeComponent />}></Route>
          <Route path='/add-employee' element={<EmployComponent />}></Route>
          <Route path='/added-employee' element={<ListEmployeeComponent />}></Route>
          <Route path='/update-employee/:id' element={<EmployComponent/>} ></Route>
          <Route path='/update-success' element={<ListEmployeeComponent/>}></Route>
        </Routes>

        <FooterComponent />

      </BrowserRouter>
    </>



  )
}

export default App
