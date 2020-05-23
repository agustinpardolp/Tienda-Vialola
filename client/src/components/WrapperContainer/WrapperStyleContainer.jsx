import React from "react";

const WrapperStyleContainer =  ({childrenJsxElement})=>{
console.log("soy childre,", childrenJsxElement)
    return (
        <div className = "wrapper">
            {childrenJsxElement}
        </div>

    )

}

export default WrapperStyleContainer;