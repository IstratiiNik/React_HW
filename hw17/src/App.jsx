import React, { useState, useMemo } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Typography,
  Container,
  Button,
} from "@mui/material";

// Main application component with theme toggle (Material UI)
function App() {
  // State to control dark/light mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Memoized theme object based on current mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? "dark" : "light",
          primary: {
            main: "#1976d2",
          },
        },
        typography: {
          h4: {
            fontWeight: 400,
          },
        },
      }),
    [isDarkMode]
  );

  // Handler to toggle theme mode
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    // Provide theme to all children
    <ThemeProvider theme={theme}>
      {/* Normalize CSS and apply theme background */}
      <CssBaseline />
      {/* Main content container */}
      <Container
        sx={{
          height: "100vh",
          textAlign: "center",
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Title showing current mode */}
        <Typography variant="h4" gutterBottom>
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </Typography>
        {/* Button to toggle theme */}
        <Button variant="contained" color="primary" onClick={toggleTheme}>
          Toggle Theme
        </Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
