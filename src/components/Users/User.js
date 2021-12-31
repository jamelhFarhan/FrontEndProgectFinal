import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
} from "@material-ui/data-grid";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 120 },
  {
    field: "Name",
    headerName: "Name",
    width: 200,
    editable: true,
  },
  {
    field: "Email",
    headerName: "Email",
    width: 200,
    editable: true,
  },
  {
    field: "PhoneNumber",
    headerName: "PhoneNumber",
    type: "number",
    width: 200,
    editable: true,
  },
  {
    field: "Price",
    headerName: "Price",
    type: "number",
    width: 200,
    editable: true,
  },
  {
    field: "Status",
    headerName: "Status",
    sortable: false,
    width: 200,
  },
  {
    field: "amount",
    headerName: "amount",
    sortable: false,
    width: 200,
  },
  {
    field: "Action",
    headerName: "Action",
    sortable: false,
    width: 200,
  },
  
  {
    valueGetter: (params: GridValueGetterParams) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
  },
];

const rows = [
  {
    id: 1,
    Name: "jamelh",
    Email: "jamelh@com",
    PhoneNumber: "0558740175",
    Status: "active",
    Price: "2334",
  },
  {
    id: 2,
    Name: "sara",
    Email: "sara@gamil",
    PhoneNumber: "055673015",
    Status: "active",
    Price: "2334",
  },
  {
    id: 3,
    Name: "nora",
    Email: "nora@gamil",
    PhoneNumber: "055673015",
    Status: "active",
    Price: "2334",
  },
  {
    id: 4,
    Name: "jamelh",
    Email: "jamelh@com",
    PhoneNumber: "0558740175",
    Status: "active",
    Price: "2334",
  },
  {
    id: 5,
    Name: "sara",
    Email: "sara@gamil",
    PhoneNumber: "055673015",
    Status: "active",
    Price: "2334",
  },
  {
    id: 6,
    Name: "nora",
    Email: "nora@gamil",
    PhoneNumber: "055673015",
    Status: "active",
    Price: "2334",
  },
  {
    id: 7,
    Name: "jamelh",
    Email: "jamelh@com",
    PhoneNumber: "0558740175",
    Status: "active",
    Price: "2334",
  },
  {
    id: 8,
    Name: "sara",
    Email: "sara@gamil",
    PhoneNumber: "055673015",
    Status: "active",
    Price: "2334",
  },
  {
    id: 9,
    Name: "nora",
    Email: "nora@gamil",
    PhoneNumber: "055673015",
    Status: "active",
    Price: "2334",
    amount: "12345"

  },
];

export default function User() {
  return (
    <div>
      <div>
        <DeleteOutlineIcon  className="userListItim"/>
      </div>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={7}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}


