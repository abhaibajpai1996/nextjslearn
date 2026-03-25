import {notFound, redirect} from 'next/navigation';
import { useRouter } from 'next/navigation';
export default async function Review({params}:
    {params :Promise<{reviewId: string, productId: string}>})
{
    const {reviewId,productId}= await params;
    if(parseInt(reviewId) >1000){  
       // notFound();
       //use redirect to home page using useRouter.
         redirect("/products");
    } 
    return <h1>Review for {reviewId} : and product is
     :{productId}</h1>
}