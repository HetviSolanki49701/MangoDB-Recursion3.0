import alanBtn from "@alan-ai/alan-sdk-web";
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";


export default function Alan() {
    const navigate = useNavigate();
    function NavToTest(){
        navigate(`/test`)
    }
    useEffect(() => {
        alanBtn({
            key: process.env.REACT_APP_alanapi,
            onCommand: (commandData) => {
                if (commandData.command === 'navigateToTest') {
                    NavToTest();                  
                }
                
            }
        });
    }, []);
  return (
    <div>Alan</div>
  )
}
