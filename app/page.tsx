import Link from "next/link"
export default function (){
    return (
        <div>
            <Link href="/blog">Blog</Link>
            <h1>Home Page</h1>
            <div>
            <Link href="/articles/breaking-news-123?lang=en">English</Link>
            </div>
            <div>
            <Link href="/articles/breaking-news-123?lang=fr">French</Link>
            </div>
          <div>
              <Link href="/articles/breaking-news-123?lang=es">Spanish</Link>
          </div>
          
            
            
        </div>
    
    
)
}
