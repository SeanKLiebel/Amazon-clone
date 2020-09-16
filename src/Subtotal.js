import React from 'react';
import './Subtotal.css';
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
    const [{ basket }] = useStateValue();

    return (
        <div className="subtotal">
          {/* Price */}  
          
          <CurrencyFormat
        renderText={(value) => (
          <React.Fragment>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </React.Fragment>
           )}
           decimalScale={2}
           value={getBasketTotal(basket)}
           displayType={"text"}
           thousandSeparator={true}
           prefix={"$"}
          />
          <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
