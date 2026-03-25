import { Metadata } from "next"
import { resolve } from "path"
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: {
    absolute: 'Blog', // Absolute title for this page
  },
  description: 'This is the blog page',
}
export default async function (){
    //await new Promise(resolve => setTimeout(resolve, 2000));
    throw new Error("Failed to load blog page");
    return <h1>Blog Page</h1>
}
//promise is resolved after 2 seconds and then UI loads.
//dynamic = "force-dynamic" ensures that the page is always rendered on the server and never cached.