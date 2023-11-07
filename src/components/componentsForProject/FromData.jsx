import axios from "axios";
import React, {useEffect, useState} from "react";

const FormData = () => {
  const [state, setState] = useState([]);


  const fetchData = async () => {
    const response = await axios.get(
      "https://crud.teamrabbil.com/api/v1/ReadProduct"
    );

    console.log(response.data.data);

    setState(response.data["data"]);
  };


  return (
    <div>
      <button onClick={fetchData}>Show Data</button>
      <br />
      <br />
      
      <ul>
        {state.map((element) => {
          return <li key={Math.random()}> {element.ProductName}</li>;
        })}
      </ul>
    </div>
  );
};

export default FormData;
