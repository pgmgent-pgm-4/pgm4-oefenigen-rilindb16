import React, { useState } from 'react'

export default function Message() {
    const [showMessage, setShowMessage] = useState(false);
    const handleClickShow = () => {
        setShowMessage(!showMessage);
    }
    return (
        <div>
            <button onClick={handleClickShow}>Show</button>
            {showMessage && <p>testss</p>}
        </div>
    )
}
