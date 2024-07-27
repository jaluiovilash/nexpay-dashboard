import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const StatBox = ({ icon1, icon2, title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" p="10px 40px">
      <Box mb="24px">
        <Box display="flex" justifyContent="space-between">
          {icon1}
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
      </Box>

      {/* SUBTITLE = AMOUNT */}
      <Box display="flex" justifyContent="right">
        {icon2}
        <Typography
          ml="4px"
          variant="h4"
          sx={{ color: colors.greenAccent[500] }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
