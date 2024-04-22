import React, { useState } from 'react';

export default function Switch() {
    const [isSwitched, setSwitch] = useState(false);

    const handleClickSwitch = () => {
        setSwitch(!isSwitched);
        document.body.style.backgroundColor = isSwitched ? "white" : "black";
    };

    return (
        <div>
            <button onClick={handleClickSwitch}>Switch</button>
        </div>
    );
}
