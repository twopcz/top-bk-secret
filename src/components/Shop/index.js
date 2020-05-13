import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Shop() {
    return (
        <div>
            <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_top"
            >
                <input type="hidden" name="cmd" value="_xclick"></input>
                <input
                    type="hidden"
                    name="business"
                    value="justin.cojp@gmail.com"
                ></input>
                <input type="hidden" name="lc" value="US"></input>
                <input type="hidden" name="item_name" value="Customs"></input>
                <input type="hidden" name="amount" value="850.00"></input>
                <input type="hidden" name="currency_code" value="USD"></input>
                <input
                    type="hidden"
                    name="button_subtype"
                    value="services"
                ></input>
                <input type="hidden" name="no_note" value="0"></input>
                <input type="hidden" name="shipping" value="20.00"></input>
                <input
                    type="hidden"
                    name="bn"
                    value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest"
                ></input>
                <input
                    name="submit"
                    alt="PayPal - The safer, easier way to pay online!"
                ></input>
                <img
                    alt=""
                    border="0"
                    src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                    width="1"
                    height="1"
                ></img>
            </form>
        </div>
    );
}
