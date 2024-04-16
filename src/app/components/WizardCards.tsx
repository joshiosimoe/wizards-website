'use client'
import React from "react"

const WizardCards = (props:any) => {
    return(
        <div>
            <div className="bg-white h-[200px] rounded-md">
                <span>{props.firstName}</span>
            </div>
        </div>
    )
    
}

export default WizardCards;