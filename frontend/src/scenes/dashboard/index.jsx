// import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import { tokens } from "../../theme";
// import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
// import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
// import PaymentsIcon from "@mui/icons-material/Payments";
// import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
// import Header from "../../components/Header";
// import LineChart from "../../components/LineChart";
// import StatBox from "../../components/StatBox";

// const Dashboard = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   //   fetchAndSetMockDataLedger().then((ledger) => {
//   //     setLedgerData(ledger);
//   //   });
//   // }, []);

//   // Callback to receive total revenue from LineChart
//   const handleTotalRevenueChange = (revenue) => {
//     setTotalRevenue(revenue);
//   };

//   if (!data || ledgerData.length === 0) {
//     return (
//       <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         height="100%"
//       >
//         <DashboardOutlinedIcon />
//         <Typography> Fetching your data...</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box m="20px">
//       {/* HEADER */}
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Header title="Dashboard" subtitle="Welcome to Nexpay dashboard!!" />
//       </Box>

//       {/* GRID & CHARTS */}
//       <Box
//         display="grid"
//         gridTemplateColumns="repeat(12, 1fr)"
//         gridAutoRows="140px"
//         gap="20px"
//       >
//         {/* ROW 1 */}
//         <Box
//           gridColumn="span 4"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             icon1={
//               <AccountBalanceWalletIcon
//                 sx={{ color: colors.greenAccent[600], fontSize: "30px" }}
//               />
//             }
//             title="Wallet Balance"
//             icon2={
//               <CurrencyRupeeIcon
//                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//               />
//             }
//             subtitle={data["merchantBalance"]}
//           />
//         </Box>
//         <Box
//           gridColumn="span 4"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             icon1={
//               <PaymentsIcon
//                 sx={{ color: colors.greenAccent[600], fontSize: "30px" }}
//               />
//             }
//             title="Total Payment"
//             subtitle="0"
//           />
//         </Box>
//         <Box
//           gridColumn="span 4"
//           gridRow="span 4"
//           backgroundColor={colors.primary[400]}
//           overflow="auto"
//         >
//           <Box
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//             borderBottom={`4px solid ${colors.primary[500]}`}
//             colors={colors.grey[100]}
//             p="15px"
//           >
//             <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
//               Recent Transactions
//             </Typography>
//           </Box>
//           {ledgerData.map((transaction, i) => (
//             <Box
//               key={`${transaction.txId}-${i}`}
//               display="flex"
//               justifyContent="space-between"
//               alignItems="center"
//               borderBottom={`4px solid ${colors.primary[500]}`}
//               p="15px"
//             >
//               <Box>
//                 <Typography
//                   color={
//                     transaction.status === "success"
//                       ? colors.greenAccent[500]
//                       : colors.redAccent[500]
//                   }
//                   variant="h5"
//                   fontWeight="600"
//                 >
//                   {transaction.orderID}
//                 </Typography>
//                 <Typography color={colors.grey[100]}>
//                   {transaction.status} | {transaction.transactionTime}
//                 </Typography>
//               </Box>
//               <Box color={colors.grey[100]}>{transaction.date}</Box>
//               <Box
//                 backgroundColor={
//                   transaction.status === "success"
//                     ? colors.greenAccent[500]
//                     : colors.redAccent[500]
//                 }
//                 p="5px 10px"
//                 borderRadius="4px"
//               >
//                 ₹ {transaction.amount}
//               </Box>
//             </Box>
//           ))}
//         </Box>

//         {/* ROW 2 */}
//         <Box
//           gridColumn="span 8"
//           gridRow="span 2"
//           backgroundColor={colors.primary[400]}
//         >
//           <Box
//             mt="25px"
//             p="0 30px"
//             display="flex "
//             justifyContent="space-between"
//             alignItems="center"
//           >
//             <Box>
//               <Typography
//                 variant="h5"
//                 fontWeight="600"
//                 color={colors.grey[100]}
//               >
//                 Revenue Generated
//               </Typography>
//               <Typography
//                 variant="h3"
//                 fontWeight="bold"
//                 color={colors.greenAccent[500]}
//               >
//                 <IconButton>
//                   <CurrencyRupeeIcon
//                     sx={{
//                       p: "0px",
//                       fontSize: "22px",
//                       color: colors.greenAccent[500]
//                     }}
//                   />
//                 </IconButton>
//                 {totalRevenue} {/* Display total revenue */}
//               </Typography>
//             </Box>
//           </Box>
//           <Box height="250px" m="-20px 0 0 0">
//             <LineChart
//               isDashboard={true}
//               onTotalRevenueChange={handleTotalRevenueChange}
//             />
//           </Box>
//         </Box>

//         {/* ROW 3 */}
//         <Box
//           gridColumn="span 4"
//           gridRow="span 1"
//           backgroundColor={colors.primary[400]}
//           p="30px"
//         >
//           <Typography variant="h5" fontWeight="600">
//             API Key:
//           </Typography>
//           <h2>{data["apiKey"]}</h2>
//         </Box>
//         <Box
//           gridColumn="span 4"
//           gridRow="span 1"
//           backgroundColor={colors.primary[400]}
//           p="30px"
//         >
//           <Typography variant="h5" fontWeight="600">
//             Email:
//           </Typography>
//           <h2>{data["merchantEmail"]}</h2>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PaymentsIcon from "@mui/icons-material/Payments";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import StatBox from "../../components/StatBox";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to Nexpay dashboard!!" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            icon1={
              <AccountBalanceWalletIcon
                sx={{ color: colors.greenAccent[600], fontSize: "30px" }}
              />
            }
            title="Wallet Balance"
            icon2={
              <CurrencyRupeeIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
            subtitle="1000000"
          />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            icon1={
              <PaymentsIcon
                sx={{ color: colors.greenAccent[600], fontSize: "30px" }}
              />
            }
            title="Total Payment"
            subtitle="0"
          />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                <IconButton>
                  <CurrencyRupeeIcon
                    sx={{
                      p: "0px",
                      fontSize: "22px",
                      color: colors.greenAccent[500]
                    }}
                  />
                </IconButton>
                1000000
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            API Key:
          </Typography>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px"></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
