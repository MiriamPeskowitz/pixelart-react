//hosts  4 isntances of Pixel 

import React from 'react'
import Pixel from './Pixel'
import Colors from '../Colors'



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