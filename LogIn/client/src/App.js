import './App.css';
import Signinbox from './Components/Signinbox';
import { Routes, Route } from "react-router-dom";
import SigninemailPage from './Components/SignInwithEmail/SigninemailPage';
import OTPpage from './Components/PhoneSignIn/OTPpage';
import EnterOTPpage from './Components/PhoneSignIn/EnterOTPpage';

function App() {
  return (
    
    <div className="App">
       <Routes>
        
        <Route path="/" element={<Signinbox />} />
        <Route path="/signinwithemail" element={<SigninemailPage/>} />
        <Route path='/signinwithphone' element={<OTPpage/>}/>
        <Route path='/receiveOTP' element={<EnterOTPpage/>}/>
      </Routes>
      {/* <Signinbox/> */}
      
      
    </div>
    
  );
}

export default App;
