import React from "react"


const AddFishForm = () => {
    return(
        <form className="fish-edit">
            <input name="name" type="text"placeholder="Name"  />
            <input name="price" type="text"placeholder="Price"  />
            <input name="status" type="text" placeholder="Status"  />
            <input name="desc" type="text"placeholder="Desc"  />
            <input name="image" type="text"placeholder="Image"  />
            <button type="submit">+ Add Fish</button>
        </form>



    )
    
}

export default AddFishForm