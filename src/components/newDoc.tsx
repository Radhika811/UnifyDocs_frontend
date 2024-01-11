import React, { useState } from 'react';
import { Button, Modal, TextField, Box, Typography } from '@mui/material';
import axios from 'axios';


const NewDocButton = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const userId = localStorage.getItem("userid")
  const authToken = localStorage.getItem("auth_token")
  console.log(userId)
  console.log(authToken)

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateDoc = async () => {

    if (!userId || !authToken) {
        console.error('UserId or AuthToken not available.');
        return;
      }
        const docData={
            "number": 2,
            "name": title || "Untitled Document",
            "description": "add Description",
            "content": "Write",
            "date_created": new Date().toISOString(),
            "date_modified": new Date().toISOString(),
            "creator": userId,
            //   number = models.IntegerField()
//     name = models.CharField()
//     description = models.TextField()
//     content = models.TextField(null = True, blank = True)
//     date_created = models.DateTimeField()
//     date_modified = models.DateTimeField()
//     creator = models.ForeignK
        }
        console.log(JSON.stringify(docData))
        const headers={
            'Authorization': `Token ${authToken}`,
            'Content-Type': "application/json",
          };

    try {
      // Send a POST request to create a new document
      const response = await axios.post('http://localhost:8000/documents/',JSON.stringify(docData),{headers});

      console.log('Document created:', response.data.id);
      const id= response.data.id;

      window.location.href = `http://localhost:3000/documents/${id}`;

      // Close the modal
      handleClose();
    } catch (error) {
      console.error('Error creating document:', error);
    }
  };



  return (
    <div>
      <Button variant="contained" color="primary" size="large" onClick={handleOpen}>
        New Document
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            p: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            New Document Details
          </Typography>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleCreateDoc}>
            Create Document
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default NewDocButton;