import React from "react"

function displayMakeupItem({item, addToCart}) {
    return(
        <div className="makeupItem">
            <img className="img" src={item.image} alt={item.name}/>
            <div className="itemDetails">
                <h2>{item.name}</h2>
                <p>${item.price}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
        </div>
    );
}

export default displayBakeryItem; 