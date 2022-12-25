import React, { createRef } from "react";
import { getFunName } from "../helpers";


const StorePicker = () => {

    myInput = createRef();

    goToStore = (event) =>{
        // 1 stop the form from submitting
        event.preventDefault();
        // 2 get the text from that input, using the create ref method
        const storeName = (myInput.value.value);

        //3 change the page to /store/whatever-they-entered
            this.props.history.push(`/store/${storeName}`);
    }



    return (
        <form className="store-selector" onSubmit={goToStore}>
            <h2>Please Enter a store</h2>
            <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={myInput} />
            <button type="submit">Visit Store </button>
        </form>
    )
}

export default StorePicker