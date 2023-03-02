import React from 'react'
import { Button_Type } from './button';
import "./button.css"

const Button = (props) => {
    const { type, btnText } = props;
    function getBtnclassName() {
        switch (type) {
            case Button_Type.PRIMARY:
                return "primary btn";
            case Button_Type.SECONDARY:
                return "secondary btn";
            default:
                return "tertiary btn";
        }
    }
    return (
        <div className={`${getBtnclassName()}`}>
            {btnText}
        </div>
    )
}

export default Button
