import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import QRCode from "qrcode.react";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const QRCodeDisplay = ({ bankDetails }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header
        title="UPI DETAILS"
        subtitle="Scan the QR code to get UPI Address"
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="left"
        justifyContent="left"
        height="700px"
        width="100%"
        bgcolor={colors.primary[400]}
        p="20px"
        borderRadius="8px"
      >
        <Typography variant="h5" mb="20px">
          {bankDetails.title}
        </Typography>
        <QRCode value={bankDetails.qrValue} size={256} />
      </Box>
    </Box>
  );
};

export default QRCodeDisplay;
