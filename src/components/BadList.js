import React from "react";

export const BadList = ({
  badList,
  handleOnDeleteBadList,
  markAsGood,
  ttlBadHours,
}) => {
  console.log(badList);
  return (
    <div className="col-md-6">
      <h2 className="text-center">Bad List</h2>
      <hr />
      <div className="list-items">
        <table className="table table-striped">
          <tbody id="bad-list">
            {badList.map((item, i) => (
              <tr key={i}>
                <td>
                  <input type="checkbox" name="" id="" /> {item.task}
                </td>
                <td>{item.hr} hrs</td>
                <td className="text-end">
                  <button
                    className="btn btn-warning btn-sm btn-warning"
                    onClick={() => markAsGood(i)}
                  >
                    <i
                      className="fas fa-arrow-left"
                      title="Mark as task list"
                    ></i>
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleOnDeleteBadList(i)}
                  >
                    <i className="fas fa-trash" title="Delete"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="ttl-bad text-end text-light text-end">
        Total time saved = <span id="bad-hours">{ttlBadHours}</span> hr
      </div>
    </div>
  );
};
