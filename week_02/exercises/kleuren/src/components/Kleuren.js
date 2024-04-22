import React, { useState } from 'react';

function ColorApp() {
    const [colors, setColors] = useState([]);

    const addRandomColor = () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        setColors([...colors, randomColor]);
    };

    const removeColor = (index) => {
        const newColors = [...colors];
        newColors.splice(index, 1);
        setColors(newColors);
    };

    return (
        <div>
        <button onClick={addRandomColor}>Voeg kleur toe</button>
        <ul>
            {colors.map((color, index) => (
            <li key={index} style={{ backgroundColor: color }}>
                {color}
                <button onClick={() => removeColor(index)}>Verwijder</button>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default ColorApp;
