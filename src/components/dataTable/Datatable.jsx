import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import Notification from "../notification/Notification";



const Datatable = () => {
  const [data, setData] = useState(userRows);
  const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })

  

  const handleDelete = (id) => {

    alert("deneme");
    setData(data.filter((item) => item.id !== id));
    setNotify({
        isOpen: true,
        message: 'Deleted Successfully',
        type: 'error'
    })
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Student List
        <Link to="/users/new" className="link">
          Add New
          
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={12}
        rowsPerPageOptions={[12]}
        checkboxSelection
      />

<Notification
                notify={notify}
                setNotify={setNotify}
            />
    </div>
  );
};

export default Datatable;
