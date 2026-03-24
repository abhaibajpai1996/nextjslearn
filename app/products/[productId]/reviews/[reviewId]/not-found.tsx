"use client"
import { usePathname } from "next/navigation"
export default function NotFound(){
    const pathname = usePathname();
    const reviewId= pathname.split('/')[4];
    const productId= pathname.split('/')[2];

    return <h1>Review number {reviewId} : 
    is not present for product   {productId} </h1>
}