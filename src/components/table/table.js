export default function MyTable({data}){
    console.log(data,"<- table data");
    return <>
    <table>
        <tr>
            <td>userId</td>
            <td>id</td>
            <td>title</td>
            <td>body</td>
        </tr>
        {data && data.length>0?
        <>
        {data.map((data)=>{
            return <>
            <tr>
                <td>{data.userId}</td>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.body}</td>
            </tr>
            </>
        })}
        </>
        :
        <></>}
    </table>
    </>
}