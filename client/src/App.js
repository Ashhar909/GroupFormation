import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/auth/Login'
import SignUp from './components/auth/Signup'
import Navbar from './components/other/Navbar'
import Home from './components/other/Home'
import GroupPage from './components/group/GroupPage'
import Alert from './components/other/Alert'
import AddPs from './components/pstate/AddPs'
import AllPs from './components/pstate/AllPs'
import PsDetails from './components/pstate/PsDetails'


function App() {
  return (
    <Router>
      <Navbar/>
      <Alert/>
      <div className="App">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/group" element={<GroupPage />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/add-ps" element={<AddPs />} />
              <Route path="/all-ps" element={<AllPs />} />
              <Route path="/ps/:id" element={<PsDetails />} />
            </Routes>
      </div>
    </Router>
  )
}
export default App