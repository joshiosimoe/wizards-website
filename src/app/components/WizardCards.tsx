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
            <div className="h-[300px] bg-yellow-400">
                <div className="font-bold bg-red-400">
                    <span>{props.firstName}</span>
                </div>
                <div>
                    <span>{props.pronouns}</span>
                </div>
                <div>
                    <span>WE LUV WIZARDS!!</span>
                </div>
            </div>
        </div>
    )
    
}

export default WizardCards;