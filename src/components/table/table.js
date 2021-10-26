const Table = ({ data }) => {
  console.log(data.length)
  return (
    <>
      <table>
        <tr>
          <td>Id</td>
          <td>Name</td>
        </tr>
        {data.length > 0 ? (
          <>
            {data.map((data) => {
              return (
                <>
                  <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                  </tr>
                </>
              );
            })}
          </>
        ) : (
          <><h1>hello</h1></>
        )}
      </table>
    </>
  );
};
export default Table;
