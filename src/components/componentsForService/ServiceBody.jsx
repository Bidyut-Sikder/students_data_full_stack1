import React, {useEffect, useRef,useState} from "react";
import Input from "./Input";

const ServiceBody = () => {
    
  const inputRef = useRef(null);

  const [formState,setFormState]=useState('fordwardRef')




  const handleChange=(e)=>{
      setFormState(e.target.value)



  }
  useEffect(() => {
     console.log(inputRef.current);
    inputRef.current.focus();
  }, []);




  return (
    <div>
      <Input ref={inputRef} handleChange={handleChange} data={formState} />

     
    </div>
  );
};

export default ServiceBody;
