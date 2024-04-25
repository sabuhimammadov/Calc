import React, { useState } from "react";

export function LifeCycle() {
    const [show, setShow] = useState(false);

    function handleChange() {
        setShow(prevShow => !prevShow);
    }

    return (
        <div>
            <button onClick={handleChange} className="w-25 ">Toggle</button>
            {show ? <div>Lifecycle is shown</div> : <div>Lifecycle is hidden</div>}
        </div>
    );
}
