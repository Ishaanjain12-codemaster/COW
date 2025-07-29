import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {Link} from "react-router-dom";
import Otp from "./Otp";
import "./index.css";

export default function Login() {
  return (
    <div className="h-screen w-screen flex items-center justify-center" style={{backgroundColor:"#242424"}}>
      <div className="bg-white" style={{width:"500px",borderRadius:"20px",height:"350px"}}>
        <h1 className="font-semibold text-center">Login</h1><br/><br/>
        <Input type="email" placeholder="Email" style={{width:"400px",marginLeft:"30px"}} /><br/>
        <Input type="password" placeholder="Password" style={{width:"400px",marginLeft:"30px"}}/><br/><br/>
        <Button className="w-full" style={{backgroundColor:"#242424",width:"450px",marginLeft:"20px"}}>Login</Button><br/>
        <Link to="/otp" style={{display:"flex",justifyContent:"center"}}>Forgot Password</Link>
      </div>
    </div>
  );
}