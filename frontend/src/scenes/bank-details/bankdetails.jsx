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

const BankDetails = () => {
  const [banks, setBanks] = useState([]);
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [error, setError] = useState("");

  const addBank = () => {
    if (bankName && accountNumber && ifscCode) {
      setBanks([...banks, { bankName, accountNumber, ifscCode }]);
      setBankName("");
      setAccountNumber("");
      setIfscCode("");
      setError("");
    } else {
      setError("All fields are required");
    }
  };

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>
        Bank Details
      </Typography>
      <Box mb={2}>
        <Typography variant="h5" gutterBottom>
          Added Banks
        </Typography>
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
        <TextField
          label="Bank Name"
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Account Number"
          type="number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="IFSC Code"
          value={ifscCode}
          onChange={(e) => setIfscCode(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
        <Button variant="contained" color="primary" onClick={addBank}>
          Add Bank
        </Button>
      </Box>
    </Box>
  );
};

export default BankDetails;
