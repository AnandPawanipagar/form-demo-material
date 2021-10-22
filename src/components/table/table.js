export default function MyTable({data}){
    console.log(data,"<- table data");
    return <>
    <table>
        <tr>
            <td>id</td>
            <td>name</td>
            <td>username</td>
            <td>email</td>
            <td>phone</td>
            <td>website</td>
        </tr>
        {data && data.length>0?<>
        {data.map((data)=>{
            return <>
            <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.website}</td>
            </tr>
            </>
        })}
        </>:<></>}
    </table>
    </>
}