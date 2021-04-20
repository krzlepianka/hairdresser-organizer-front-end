import { useState } from 'react';

const useToggle = () => {

    const [active, setActive] = useState(false);

    const toggle = () => {
        setActive(!active);
    };


    return { active, setActive, toggle };
};

export default useToggle;