import React from "react";
import Book from "./Book";

function Library(){
    return(
        <div>
            <Book name="처름 만난 파이썬" numOfPage={300}></Book>
            <Book name="처름 만난 AWS" numOfPage={400}></Book>
            <Book name="처름 만난 리액트" numOfPage={500}></Book>
        </div>
    )
}

export default Library;