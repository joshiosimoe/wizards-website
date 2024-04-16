'use client'
import React from "react"
import Image from "next/image"

const WizardCards = (props:any) => {
    return(
        <div className="bg-white h-[500px] rounded-md flex flex-col items-center p-10 gap-2 text-lg text-wrap">
            <div className="grid place-items-center h-[300px]">
                <Image
                src={props.wizardURL}
                alt={`${props.firstName}'s Wizard`}
                width={200}
                height={200}
                />
            </div>
            <div className="font-bold text-black">
                <span>{props.firstName}</span>
            </div>
            <div className="text-black">
                <span>{props.pronouns}</span>
            </div>
            <div className="text-black">
                <span>WE LUV WIZARDS!!</span>
            </div>
        </div>
    )
    
}

export default WizardCards;