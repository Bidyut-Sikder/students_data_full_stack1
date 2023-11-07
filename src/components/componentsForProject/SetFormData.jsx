

import axios from 'axios';
import React, { useState } from 'react';



const SetFormData = () => {
    const [state, setState] = useState(

        {
            Img: "",
            ProductCode: "",
            ProductName: "",
            Qty: "",
            TotalPrice: "",
            UnitPrice: ""
        }
    )

    const handleChange = (key, value) => {

        setState({

            ...state,
            [key]: value
        })
    }

    const SubmitData = async (e, state) => {
        e.preventDefault()
        console.log(state)
        let result = await axios.post('https://crud.teamrabbil.com/api/v1/CreateProduct', state)

        console.log(result);

    }


    return (
        <div>

            <form >

                <label htmlFor="lname">Img</label><br />
                <input type="text" value={state.Img} onChange={(e) => handleChange('Img', e.target.value)} id="Img" name="Img"></input><br /><br />
                <label htmlFor="lname">Product Code</label><br />
                <input type="text" value={state.ProductCode} onChange={(e) => handleChange('ProductCode', e.target.value)} id="ProductCode" name="ProductCode"></input><br /><br />
                <label htmlFor="lname">Product Name</label><br />
                <input type="text" value={state.ProductName} onChange={(e) => handleChange('ProductName', e.target.value)} id="ProductName" name="ProductName"></input><br /><br />
                <label htmlFor="lname">Qty</label><br />
                <input type="text" value={state.Qty} onChange={(e) => handleChange('Qty', e.target.value)} id="Qty" name="Qty"></input><br /><br />
                <label htmlFor="lname">Total Price</label><br />
                <input type="text" value={state.TotalPrice} onChange={(e) => handleChange('TotalPrice', e.target.value)} id="TotalPrice" name="TotalPrice"></input><br /><br />
                <label htmlFor="lname">Unit Price</label><br />
                <input type="text" value={state.UnitPrice} onChange={(e) => handleChange('UnitPrice', e.target.value)} id="UnitPrice" name="UnitPrice"></input><br /><br />

                <button onClick={(e) => SubmitData(e, state)}>Submit</button>
           
            </form>
        </div>
    );
};

export default SetFormData;