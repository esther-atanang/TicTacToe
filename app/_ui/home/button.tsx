import React from 'react'

type Props = {
    handleClick: ()=>void,
    buttonText: string,
    color: string,
}

const Button = ({ handleClick, buttonText, color }: Props) => {
    let btnColor = (color === "yellow") ? `bg-btn-yellow` : "bg-btn-blue"
    let borderColor = (color === "yellow") ? `border-btn-border-yellow` : `border-btn-border-blue`
    let hoverColor = (color === "yellow") ? `hover:bg-btn-yellow-hover` : `hover:bg-btn-blue-hover`

    return (
        <button
            type='button'
            className={`text-main ${btnColor} ${borderColor} ${hoverColor} active:border-b-[0.1rem] font-bold md:text-xl rounded-[1.3rem] uppercase p-4 border-b-[0.5rem]`}
            onClick={handleClick}
            >
            {buttonText}
        </button>
    )
}

export default Button;
