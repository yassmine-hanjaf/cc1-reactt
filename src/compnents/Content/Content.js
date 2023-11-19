import React, {useContext} from 'react'
import BtnToggle from '../BtnToggle/BtnToggle'
import './Content.css'

import { ThemeContext } from '../Context/ThemeContext';


export default function Content() {

    const {theme} = useContext(ThemeContext)

    console.log(theme);
    
    return (
        <div className=""  >
            <BtnToggle />
            
        </div>
    )
}
