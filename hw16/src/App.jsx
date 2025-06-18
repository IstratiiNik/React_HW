import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

// Main application component using Material UI
function App() {
  // State to control dialog open/close
  const [open, setOpen] = useState(false);

  // Open the dialog
  const handleOpen = () => {
    setOpen(true);
  };

  // Close the dialog
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Application top bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            App on Material UI
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main content container */}
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the app!
        </Typography>

        {/* Button to open dialog */}
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Open dialog
        </Button>

        {/* Dialog component */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Hello!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This is a dialog box with information.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* Button to close dialog */}
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
}

export default App;
