import React from "react"

export const TotalPrice = (props) => {
    return (
        <div>
            <h3>Total Price</h3>
            <p>
                {props.items.reduce((acc, items) => acc + (items.price * items.units), 0)}
            </p>
        </div>
    )
}