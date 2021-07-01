import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const theme = createMuiTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});

export default function Direction() {
  return (
    <ThemeProvider theme={theme} dir="rtl">
      <TextField placeholder="Name" />
    </ThemeProvider>
  );
}
