import './App.css';
import Signinbox from './Components/Signinbox';
// import OTPpage from './Components/PhoneSignIn/OTPpage';
// import EnterOTPpage from './Components/PhoneSignIn/EnterOTPpage';
import SigninemailPage from './Components/SignInwithEmail/SigninemailPage';

function App() {
  return (
    
    <div className="App">
      {/* <Signinbox/> */}
      {/* <OTPpage/> */}
      {/* <EnterOTPpage/> */}
      <SigninemailPage/>
    </div>
    
  );
}

export default App;
