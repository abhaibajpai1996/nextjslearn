export default async function Details({params}:
    {params: Promise<{productId: string}>}  
){
    const {productId} =await params;
    return <h1>Product Page Details are :{productId} </h1>
}