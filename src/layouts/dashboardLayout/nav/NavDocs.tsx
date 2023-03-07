import React from "react";
// @mui
import { Stack, Button, Typography, Box } from "@mui/material";
// locales
// import { useLocales } from "../../../locales";
// routes
import { useAppSelector } from "store";
import { AccountSelector } from "scenes/account/redux/slice";
import Svg from "utils/svg";
import { PATH_APP } from "constant/routeConstant";

// ----------------------------------------------------------------------

export default function NavDocs() {
  const user = useAppSelector(AccountSelector.getProfile);

  // const { translate } = useLocales();

  return (
    <Stack
      spacing={3}
      sx={{
        px: 5,
        pb: 5,
        mt: 10,
        width: 1,
        display: "block",
        textAlign: "center",
      }}
    >
      <Box component="img" src={Svg.illustration.illustrationDocs} />

      <div>
        <Typography gutterBottom variant="subtitle1">
          {`Hi, ${user?.userName}`}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "text.secondary", whiteSpace: "pre-line" }}
        >
          {`$docs.description`}
        </Typography>
      </div>

      <Button
        href={PATH_APP.root}
        target="_blank"
        rel="noopener"
        variant="contained"
      >
        {`docs.documentation`}
      </Button>
    </Stack>
  );
}
