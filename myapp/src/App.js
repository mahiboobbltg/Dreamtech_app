import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'





import Dtechregister from'./Dtechloginpage/Detchregister'
import Employeepage from './Employeepage/Employee'
// import EmployeeProfile from './EmployeeProfile/employee';

// import Client from './clientprofile/Clientprofile';
import Clientpage from './Clientpage/clientpage';
import Dtechproject from './Dtechprojects/Dtechproject';
import Leadpage from './leads/Lead';
import Tickets from './tickets/Tickets';
import Sales from './sales/sales';
import Empdashboard from './emp/employeedashboard';
// import Navbarpage from './emp/Navbarpage';
import Pricing from './pricing/paricingpage';
import EmployeeProfile from './EmployeeProfile/employeeprofile';
import Dtechadmin from "./Dtechadmin/Dtechadmin"

import Dtechlogin from './Dtechloginpage/Dtechlogin';

function App() {


  return (
    <BrowserRouter>
    
      <div className='container-fluid  d-flex ps-0 pe-0' style={{marginTop:"6.2rem"}}>
        <Routes >
          <Route path='/' element={<Dtechlogin />} />
          <Route path='/Dtechregister' element={<Dtechregister />} />
          <Route path='/Dtechadmin' element={<Dtechadmin />} />
          <Route path='/Empdashboard' element={<Empdashboard />} />
          <Route path='/Employeepage' element={<Employeepage />} />
          <Route path='/Clientpage' element={<Clientpage />} />
          <Route path='/Dtechproject' element={<Dtechproject />} />
          <Route path='/Leadpage' element={<Leadpage />} />
          <Route path='/Tickets' element={<Tickets />} />
          <Route path='/Sales' element={<Sales />} />
          <Route path='/Pricing' element={<Pricing/>} />
          <Route path='/Pricing' element={<Pricing/>} />
          <Route path='/EmployeeProfile' element={<EmployeeProfile/>} />
        </Routes>
      </div>


    </BrowserRouter>
  )
}

export default App

