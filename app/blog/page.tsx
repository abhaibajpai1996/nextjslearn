import { Metadata } from "next"
export const metadata: Metadata = {
  title: {
    absolute: 'Blog', // Absolute title for this page
  },
  description: 'This is the blog page',
}
export default function (){
    return <h1>Blog Page</h1>
}