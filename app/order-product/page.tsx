'use client';

import { useRouter } from "next/navigation";

export default function OrderProduct(){
    const router = useRouter();
    const orderProduct = () => { 
        alert("Product Ordered!");
        router.push("/");
    }
    return (
        <>
          <h1>Order Product Page</h1>
        <button onClick={orderProduct}>          
            Order Now</button>
           
       
        </>
       
    )

}
// In this code, we have created a client component OrderProduct which has a button to order a product. When the button is clicked, it shows an alert and then redirects the user to the home page using useRouter from next/navigation.