import React from "react";
import { Box, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const Reports = () => {
  const reports = [
    { name: "Sales Report", path: "/sales-report" },
    { name: "Refund Report", path: "/refund-report" },
    { name: "Dispute Report", path: "/dispute-report" },
    { name: "Settlement Report", path: "/settlement-report" },
    { name: "Customer Report", path: "/customer-report" },
    { name: "Balance Report", path: "/balance-report" },
    { name: "Download Balance Statement", path: "/download-balance-statement" },
    { name: "Total Transaction", path: "/total-transaction" },
    { name: "Customer Care - Nexpay", path: "/customer-care" }
  ];

  return (
    <Box m="20px">
      <Header title="Reports" subtitle="All information in one place" />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="76vh"
        p={2}
      >
        <Grid container spacing={10} maxWidth={1200}>
          {reports.map((report, index) => (
            <Grid item xs={4} key={index}>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={report.path}
                fullWidth
              >
                {report.name}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Reports;
