import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";

import { Box, IconButton, Typography, useTheme } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HistoryIcon from "@mui/icons-material/History";
import SyncAltSharpIcon from "@mui/icons-material/SyncAltSharp";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ReceiptSharpIcon from "@mui/icons-material/ReceiptSharp";
import { tokens } from "../../theme";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100]
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important"
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important"
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important"
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important"
        }
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}

          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100]
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="16px"
              >
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
                {/* <Typography variant="h4" color={colors.grey[100]}>
                  Nexpay
                </Typography> */}
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="26px">
              {/* NAME OF THE USER/MERCHANT */}
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Jake Peralta
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Home" //Dashboard
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Ledger" //Manage Teams
              to="/team"
              icon={<HistoryIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* <Item
              title="Transfer" //Contacts Information
              to="/contacts"
              icon={<SyncAltSharpIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
            <Item
              title="QR Code" //Invoices Balances
              to="/qrcode"
              icon={<QrCodeScannerIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Reports" //Profile Form
              to="/form"
              icon={<ReceiptSharpIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Bank Details" //Calendar
              to="/calendar"
              icon={<AccountBalanceIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
