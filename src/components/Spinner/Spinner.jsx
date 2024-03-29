import React, { useState } from "react";

const Spinner = () => {
    const [isVisible, setIsVisible] = useState(true);

    setInterval(() => {
        setIsVisible(!isVisible);
    }, 1500);

    return <div>{isVisible && <div className="spinner"></div>}</div>;
};

export default Spinner;
