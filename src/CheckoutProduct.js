import React, { forwardRef } from 'react';
import FlipMove from 'react-flip-move';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';



function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();


    const removeFromBasket = () => {

        //remove item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }




    return (
        <FlipMove>
            <div key={id} className="checkoutProduct">

                <img className="checkoutProduct__image" src={image} alt="" />

                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">{title}</p>
                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="checoutProduct__rating">
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>⭐️</p>
                            ))}

                    </div>
                    <button onClick={removeFromBasket}>Remove from Basket</button>


                </div>
            </div>
        </FlipMove>
    )
}

export default CheckoutProduct
