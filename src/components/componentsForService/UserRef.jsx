import React, { useEffect, useRef } from 'react';

const UserRef = () => {
    const ref=useRef(0)

    useEffect(()=>{
console.log(ref.current)
    },[])
    return (
        
        <div>
            <h1 ref={ref} >this is useRef()</h1>
        </div>
    );
};

export default UserRef;