import React from "react";

const style={
    wrapper:{
        margin:8,
        padding:8 ,
        display:"flex",
        flexDirection:"row",
        border:"1px solid grey",
        borderRadius:16,
    },
    messageText: {
        color:"black",
        fontSize:16,
    },
};

class Notification extends React.Component{
    constructor(props){
        super();

        this.state={};

    }

    render(){
        return(
            <div style={style.wrapper}> 
                <span style={style.messageText}>{this.props.message}</span>
            </div>
        )
    }
}
export default Notification;