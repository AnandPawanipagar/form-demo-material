const MyTable = ({ data }) => {
  console.log(data, "<- table data");
  return (
    <>
      <table>
        <tr>
          <td>Id</td>
          <td>Name</td>
        </tr>
        { data.length > 0 ? (
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
          <></>
        )}
      </table>
    </>
  );
};
export default MyTable;
