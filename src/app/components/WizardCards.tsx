'use client'
import React from "react"
import Image from "next/image"

const WizardCards = (props:any) => {
    return(
        <div className="bg-white h-[300px] rounded-md flex flex-col items-center p-10">
            <div className="grid place-items-center h-[150px]">
                <Image
                src={props.wizardURL}
                alt="Wizard Image"
                width={100}
                height={100}
                />
            </div>
            <div className="font-bold">
                <span>{props.firstName}</span>
            </div>
            <div>
                <span>WE LUV WIZARDS!!</span>
            </div>
        </div>
    )
    
}

export default WizardCards;