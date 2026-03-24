export default async function CatchAllsegments({params}:
    {
        params:Promise<{slug:string[]}>
    })
{
    const {slug} = await params;
    if(slug?.length === 2){
        return <h1>Information for {slug[0]} is
        {slug[1]} </h1>
    }
    else if(slug?.length === 1){
        return <h1>Docs Home Page {slug[0]}</h1>
    }
    return <h1>Docs information </h1>
}