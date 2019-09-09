//hosts  4 instances of Pixel, or as many colors as I add in Colors.js and in styles.css

import React from 'react'
import Pixel from './Pixel'
import Colors from '../Colors'

const 

//ask about this, unnamed function, takes in props
export default props => {
    return (
        <div className="colorpicker">
            {Colors.map((color, index) => {
                return <Pixel key={index} 
                            background={color}
                            current={Colors[props.currentColor] === color}
                            onClick={event => props.setColor(index)}
                        />
                })}  
        </div>
    )
}