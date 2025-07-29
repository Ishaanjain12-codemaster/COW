import Login from "@/Login";
import Otp from "@/Otp";
import OTPinput from "@/OTPinput";
import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/otp" element={<Otp/>} />
      <Route path="/otp_input" element={<OTPinput/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
