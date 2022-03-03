export const BadList = ({ badList }) => {
  return (
    <div className="col-md-6 mb-5">
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
                  <button className="btn btn-warning btn-sm btn-warning">
                    <i
                      className="fas fa-arrow-left"
                      title="Mark as task list"
                    ></i>
                  </button>
                  <button className="btn btn-danger btn-sm">
                    <i className="fas fa-trash" title="Delete"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="ttl-bad text-end text-light text-end">
        Total time saved = <span id="bad-hours">0</span> hr
      </div>
    </div>
  );
};
