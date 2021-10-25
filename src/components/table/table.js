const MyTable=({data})=>{
    console.log(data,"<- table data");
    return <>
    <table>
        <tr>
            <td>Id</td>
            <td>Name</td>
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
export default MyTable