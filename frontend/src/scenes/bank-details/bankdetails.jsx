import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import Header from "../../components/Header";

const BankDetails = () => {
  const [banks, setBanks] = useState([]);
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");

  const addBank = () => {
    if (bankName && accountNumber && ifscCode) {
      setBanks([...banks, { bankName, accountNumber, ifscCode }]);
      setBankName("");
      setAccountNumber("");
      setIfscCode("");
    }
  };

  return (
    <Box m="20px">
      <Header title="Bank Details" subtitle="Bank Information" />
      <Box p={2}>
        <Typography variant="h4" gutterBottom>
          Added Banks
        </Typography>
        <Box mb={2}>
          <TextField
            label="Bank Name"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Account Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="IFSC Code"
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={addBank}>
            Add Bank
          </Button>
        </Box>

        <List>
          {banks.map((bank, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`Bank Name: ${bank.bankName}`}
                secondary={`Account Number: ${bank.accountNumber}, IFSC Code: ${bank.ifscCode}`}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default BankDetails;
