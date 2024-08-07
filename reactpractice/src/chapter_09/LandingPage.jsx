import React,{useState} from "react";
import Toolbar from "./Tool.bat";

function LandingPage(props){
    const [isLoggedIn ,setIsLoggedIn]  =  useState(false);

    const onClicklogin= () =>{
        setIsLoggedIn(true);
    
    };

    const onClickLogout =() => {
        setIsLoggedIn(false);
    }

    return (
        <div>
            <Toolbar 
                isLoggedIn ={isLoggedIn}
                onClickLogin={onClicklogin}
                onClickLogout={onClickLogout}
                > </Toolbar>
            <div style={{padding :16}}>소플과 함께하는 리액트 공부!</div>
        </div>
    )
}

export default LandingPage;