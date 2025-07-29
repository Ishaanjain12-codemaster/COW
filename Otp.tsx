import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import OTPinput from "./OTPinput";

export default function Otp() {
    const [phoneNumber,setPhoneNumber]=useState("");
    const [showOTPinput,setShowOTPinput]=useState(false);
    const [generatedOtp,setGeneratedOtp]=useState("");
    const handlePhoneNumber=(e)=>{
        setPhoneNumber(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        const reg=/^[6789]{1}[0-9]{9}$/;
        if(! reg.test(phoneNumber)){
            alert ("Invalid Phone Number");
        }
        else{
            setShowOTPinput(true);
        }
    }

    const onOTPsubmit=(otp)=>{
        if(generatedOtp===otp){
            console.log("Login Successfully ",otp);
        }
    }

    const generateAndSendOtp=()=>{
        const otp=Math.floor(1000 + Math.random() * 9000).toString();
        setGeneratedOtp(otp);
        console.log(otp);
    }

    return (
        <div className="h-screen w-screen flex items-center justify-center" style={{backgroundColor:"#242424"}}>
        <div className="bg-white" style={{width:"500px",borderRadius:"20px",height:"230px"}}>
            <h2 className="font-bold text-center">Login using OTP</h2><br/><br/>
            {!showOTPinput ? 
            <form onSubmit={handleSubmit}>
                <Input type="phone" placeholder="Enter Phone Number" style={{width:"400px",marginLeft:"30px"}} value={phoneNumber} onChange={handlePhoneNumber} /><br/>
                <Button className="w-full" style={{backgroundColor:"#242424",width:"450px",marginLeft:"20px"}}  onClick={generateAndSendOtp}>Send OTP</Button><br/>
            </form>
             :
            <div className="text-center">
                Otp sent to +91 {phoneNumber}<br/>
                <OTPinput length={4} onOTPsubmit={onOTPsubmit}/>
            </div> 
            }
        </div>
    </div>
    );
}
