import React, {useContext} from 'react';
import { GlobalContext } from '../form/form';
const Table = () => {
  const [data]=useContext(GlobalContext);
  // console.log(data, "this is data")
  return (
    <>
      <table>
        <tr>
          <td>Id</td>
          <td>Name</td>
        </tr>
        {data.length > 0 ? (
          <>
            {data.map((obj) => {
              return (
                <>
                  <tr>
                    <td>{obj.id}</td>
                    <td>{obj.name}</td>
                  </tr>
                </>
              );
            })}
          </>
        ) : (
          <><h1></h1></>
        )}
      </table>
    </>
  );
};
export default Table;
