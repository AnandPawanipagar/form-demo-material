export default function MyTable({data}){
    console.log(data,"<- table data");
    return <>
    <table>
        <tr>
            <td>id</td>
            <td>name</td>
            {/* <td>title</td> */}
            {/* <td>body</td> */}
        </tr>
        {data && data.length>0?
        <>
        {data.map((data)=>{
            return <>
            <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                {/* <td>{data.title}</td> */}
                {/* <td>{data.body}</td> */}
            </tr>
            </>
        })}
        </>
        :
        <></>}
    </table>
    </>
}