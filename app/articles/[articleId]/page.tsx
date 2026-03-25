import Link from "next/link"
export default async function Articles(
    {params,searchParams}:
    {params:Promise<{articleId:string}>,
searchParams:Promise<{lang?:"en" | "fr" | "es"}>}

)
{
    const {articleId} = await params;
    const {lang="en"} = await searchParams;
    return (
        <>
         <h1>News Articles {articleId}</h1>
        <p>Reading in this {lang}.</p>

        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <br />
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
        <br />
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        </>
       
        )
}
//params are used to capture dynamic segments in the URL,
//  while searchParams are used to capture query parameters.
//  In this example, articleId is a dynamic segment in the URL, 
// and lang is a query parameter that specifies the language for reading the article.