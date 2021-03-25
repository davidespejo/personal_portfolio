import React from 'react'
import ColorManager from '../../utils/colors/color.manager'
import "./reset.css";
import "./fonts.scss";
import "./variables.scss";
import "./main.scss";
import "./button.scss";

export default function Styles() {
    return (
        <div className="styles">
           {
                ColorManager.generateCssColors()
            } 
        </div>
    )
}
