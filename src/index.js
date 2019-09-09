import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Canvas from './components/Canvas'
import Colorpicker from './components/ColorPicker'

import './styles.css'

function App() {
    const [color, setColor] = useState(0)

    return (
        <div className="App">
            <Colorpicker 
                currentColor={color}
                setColor={color => setColor(color)}
                />
            <Canvas currentColor = {color} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
