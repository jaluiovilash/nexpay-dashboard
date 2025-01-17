import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";

import { mockDataLedger } from "../../data/mockData";
import Header from "../../components/Header";

const Ledger = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "id",
      headerName: "Transaction ID",
      flex: 1
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1
    },
    {
      field: "method",
      headerName: "Transfer Method",
      flex: 1
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 1
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1
    },
    {
      field: "time",
      headerName: "Transaction Time",
      flex: 1
    },
    {
      field: "date",
      headerName: "Transaction Date",
      flex: 1
    }
  ];

  return (
    <Box m="20px">
      <Header title="Ledger" subtitle="Managing the transaction history" />
      <Box
        m="40px 0 0 0"
        height="76vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none"
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none"
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300]
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none"
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400]
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700]
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`
          }
        }}
      >
        <DataGrid checkboxSelection rows={mockDataLedger} columns={columns} />
      </Box>
    </Box>
  );
};

export default Ledger;
