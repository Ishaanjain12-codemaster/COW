import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

type OTPinputProps = {
  length?: number;
  onOTPsubmit?: (otp: string) => void;
};

export default function OTPinput({ length = 4, onOTPsubmit = () => {} }: OTPinputProps){

    const [otp,setOtp]=useState(new Array(length).fill(""));
    const [combinedOtp,setCombinedOtp]=useState("");
    const inputRefs=useRef([]);
    useEffect(()=>{
        if(inputRefs.current[0]){
            inputRefs.current[0]?.focus();
        }
    },[])


    const handleChange=(index,e)=>{
        const value=e.target.value;
        if(isNaN(value)) return;

        const newOTP=[...otp];
        newOTP[index]=value.substring(value.length - 1);
        setOtp(newOTP);
        const combineOtp=newOTP.join("");
        setCombinedOtp(combineOtp);

        if(value && index<length-1 && inputRefs.current[index+1]){
            inputRefs.current[index+1].focus();
        }
    }


    const handleKeyDown=(index,e)=>{
        if(e.key==="Backspace" && !otp[index] && index>0 && inputRefs.current[index-1]){
            inputRefs.current[index-1].focus();
        }
    }

    const handleSubmit=()=>{
        (combinedOtp.length === length)? (onOTPsubmit(combinedOtp)): alert("Please complete the OTP");
    }
    return(
        <div>
            {otp.map((value,index)=>{
                return (
                    <input 
                    key={index}
                    type="text"
                    ref={(input)=>(inputRefs.current[index]=input)}
                    value={value}
                    onChange={(e)=>{handleChange(index,e)}}
                    onKeyDown={(e)=>{handleKeyDown(index,e)}}
                    className="w-10 h-10 text-center border-1 m-10 outline-none"
                    />
                )
            })}<br/><br/>
            <Button className="w-full" style={{backgroundColor:"#242424",width:"450px",marginLeft:"20px"}} onClick={handleSubmit}>Validate</Button>

        </div>
    );
}