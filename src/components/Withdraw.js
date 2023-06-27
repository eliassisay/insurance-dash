import React from "react";

const Withdraw = ({firstname,lastname,email,amount,tx_ref,public_key})=>{
    

return(
    <form method="POST" action="https://api.chapa.co/v1/hosted/pay" >
    <input type="hidden" name="public_key" value={public_key} />
    <input type="hidden" name="tx_ref" value={tx_ref} />
    <input type="hidden" name="amount" value={amount} />
    <input type="hidden" name="currency" value="ETB" />
    <input type="hidden" name="email" value={email} />
    <input type="hidden" name="first_name" value={firstname} />
    <input type="hidden" name="last_name" value={lastname} />
    <input type="hidden" name="title" value="Let us do this" />
    <input type="hidden" name="description" value="Paying with Confidence with cha" />
    <input type="hidden" name="logo" value="https://yourcompany.com/logo.png" />
    <input type="hidden" name="callback_url" value="http://localhost:4001/api/" />
    <input type="hidden" name="return_url" value="http://localhost:3000/dashboard" />
    <input type="hidden" name="meta[title]" value="test" />
    <button type="submit">Pay Now</button>
</form>
)
}


export default Withdraw