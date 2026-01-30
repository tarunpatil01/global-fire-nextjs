"use client";
import { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  MenuItem,
  Alert,
} from "@mui/material";

const AdminPage = () => {
  const [contacts, setContacts] = useState([]);
  const [showMessages, setShowMessages] = useState(true);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [location, setLocation] = useState("vashi");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch contact messages from the backend
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("http://localhost/global-fire-nextjs/app/contact/contact.php");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched contacts:", data);
        if (Array.isArray(data)) {
          setContacts(data);
        } else {
          console.error("Invalid response format. Expected an array.");
        }
      } catch (error) {
        console.error("Error fetching contacts:", error);
        setErrorMessage("Failed to fetch contacts. Please try again later.");
      }
    };
    
    fetchContacts();
  }, []);

  // Handle form submission for adding a client
  const handleAddClient = async () => {
    const data = {
        name: clientName,
        email: clientEmail,
        location: location,
    };

    console.log("Data being sent:", data);

    try {
        const response = await fetch(
            "http://localhost/global-fire-nextjs/app/admin/adminpage/client.php",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );

        if (!response.ok) {
          const errorResponse = await response.json();
          console.error("Server responded with an error:", errorResponse.message);
          throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorResponse.message}`);
      }
      
        const result = await response.json();
        console.log("Response from server:", result);

        if (result.success) {
            setSuccessMessage("Client added successfully!");
            setErrorMessage("");
            setClientName("");
            setClientEmail("");
            setLocation("vashi");
        } else {
            setErrorMessage(result.message || "Failed to add client. Please try again.");
            setSuccessMessage("");
        }
    } catch (error) {
        console.error("Error adding client:", error);
        setErrorMessage("Failed to add client. Please try again later.");
    }
};


  return (
    <Container className="py-36" maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Buttons for toggling views */}
        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{ backgroundColor: showMessages ? "#EF4444" : "#0C1844", marginRight: 2 }}
            onClick={() => setShowMessages(true)}
          >
            Messages
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: !showMessages ? "#EF4444" : "#0C1844" }}
            onClick={() => setShowMessages(false)}
          >
            Add Client
          </Button>
        </Grid>

        {/* Conditional rendering for Messages */}
        {showMessages ? (
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Typography variant="h6" gutterBottom>
                Messages from Users
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Phone</TableCell>
                      <TableCell>Message</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {contacts.length ? (
                      contacts.map((contact) => (
                        <TableRow key={contact.id}>
                          <TableCell>{contact.id}</TableCell>
                          <TableCell>{contact.name}</TableCell>
                          <TableCell>{contact.email}</TableCell>
                          <TableCell>{contact.phone}</TableCell>
                          <TableCell>{contact.message}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={5}>No messages to display</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        ) : (
          // Conditional rendering for Add Client form
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Typography variant="h6" gutterBottom>
                Add Client
              </Typography>
              <TextField
                label="Client Name"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                fullWidth
                margin="normal"
                size="small"
              />
              <TextField
                label="Client Email"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                fullWidth
                margin="normal"
                size="small"
              />
              {/* Location selector */}
          
<TextField
  select
  label="Location"
  value={location}
  onChange={(e) => setLocation(e.target.value)}
  fullWidth
  margin="normal"
  size="small"
>
  <MenuItem value="vashi">Vashi</MenuItem>
  <MenuItem value="nerul">Nerul</MenuItem>
  <MenuItem value="belapur">Belapur</MenuItem>
  <MenuItem value="koparkhairane">Koparkhairane</MenuItem>
  <MenuItem value="sanpada">Sanpada</MenuItem>
  <MenuItem value="seawood">Seawood</MenuItem>
</TextField>

              <Button variant="contained" sx={{ backgroundColor: "#EF4444", color: "white" }} onClick={handleAddClient}>
                Add Client
              </Button>

              {/* Success and Error message display */}
              {successMessage && (
                <Alert severity="success" sx={{ mt: 2 }}>
                  {successMessage}
                </Alert>
              )}
              {errorMessage && (
                <Alert severity="error" sx={{ mt: 2 }}>
                  {errorMessage}
                </Alert>
              )}
            </Paper>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default AdminPage;