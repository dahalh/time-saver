import React from "react";

// receiving goodList from App.js
export const GoodList = ({
  goodList,
  handleOnDeleteGoodList,
  markAsBad,
  ttlGoodHours,
}) => {
  console.log(goodList);
  return (
    <div className="col-md-6 mb-5">
      <h2 className="text-center">Task List</h2>
      <hr />
      <div className="list-items">
        <table className="table table-striped">
          <tbody id="good-list">
            {/* displaying good list on webpage */}
            {goodList.map((item, i) => (
              <tr key={i}>
                <td>
                  <input type="checkbox" name="" id="" /> {item.task}
                </td>
                <td>{item.hr} hrs</td>
                <td className="text-end">
                  <button
                    className="btn btn-danger btn-sm"
                    // delete task, anonymous function
                    // there will be an error without anonymous function
                    onClick={() => handleOnDeleteGoodList(i)}
                  >
                    <i className="fas fa-trash" title="Delete"></i>
                  </button>
                  <button
                    className="btn btn-warning btn-sm btn-warning"
                    onClick={() => markAsBad(i)}
                  >
                    <i
                      className="fas fa-arrow-right"
                      title="Mark as bad list"
                    ></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
