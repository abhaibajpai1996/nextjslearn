//import 
import { Metadata } from "next";

//add props
type Props={
    params:Promise<{productId:string}>
}

//add metadata async function
export async function generateMetadata({
    params}:Props):Promise<Metadata>{
    const {productId} = await params;
    return {
        title: `Product ${productId}`,
        description: `This is the product page for product ${productId}`
    }
    
}

export default async function Details({params}:
    {params: Promise<{productId: string}>}  
){
    const {productId} =await params;
    return <h1>Product Page Details are :{productId} </h1>
}