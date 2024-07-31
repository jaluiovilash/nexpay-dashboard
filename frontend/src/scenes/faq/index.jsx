import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I add a new bank account?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Navigate to "Bank Details," click "Add Account," and fill in the
            required information.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I view my transaction history?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Go to the "Ledger" section to see all past transactions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I transfer funds?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Click "Transfer," enter the recipient's details, amount, and
            confirm.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I generate a QR code?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Visit the "QR Code" section, input the necessary details, and
            generate.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I access reports?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Head to the "Reports" section to view and download various financial
            reports.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I update my profile information?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Go to "Profile," edit the desired fields, and save changes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What should I do if I forget my password?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Click "Forgot Password" on the login page and follow the
            instructions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I set up notifications?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Navigate to "Settings," find "Notifications," and customize as
            needed.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I check my account balance?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The balance is displayed on the "Home" section dashboard.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I manage my payment methods?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Go to "Settings," then "Payment Methods," and make necessary
            changes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I contact customer support?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Click on "Support" in the "Settings" section for contact options.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I export my transaction data?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Visit "Reports," select the desired date range, and click "Export."
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I add a beneficiary for transfers?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In "Transfer," select "Add Beneficiary," fill out the details, and
            save.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I change my dashboard theme?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Go to "Settings," then "Display," and choose your preferred theme.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I view pending transfers?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Check the "Transfer" section for a list of pending transactions.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
