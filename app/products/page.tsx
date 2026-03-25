import Link from "next/link";

export default function Products(){
    const prodId=100;
     return (
     <>
   
    <h1>Products Page</h1>
    <h2>
        <Link href="/products/1">Product 1</Link>
        </h2>
    <h2><Link href="/products/2">Product 2</Link></h2>
    <h2><Link href="/products/3">Product 3</Link></h2>
    <h2><Link href={`/products/${prodId}`}>Product {prodId}</Link></h2>
    </>
    )
    
    
}