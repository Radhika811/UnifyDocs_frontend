import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import axios from 'axios';
// import Button from '@mui/material';
import Button from '@mui/material/Button';


const TextEditor = () => {
  const [content, setContent] = useState('');
  const { docId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:8000/documents/${docId}`;
        const response = await axios.get(url);
        setContent(response.data.content);
      } catch (error) {
        console.log('Error fetching document:', error);
      }
    };

    if (docId) {
      fetchData();
    }
  }, [docId]);

  const handleEditorChange = (value:string) => {
    setContent(value);
  };
  const url = `http://localhost:8000/documents/${docId}/`;

  const handleUpdateDocument = async () => {
    try {
      // const url = `http://localhost:8000/documents/${docId}/`;
      const response = await axios.get(url);
  
      // Get the existing document data
      const existingDocument = response.data;
      const authToken=localStorage.getItem('auth_token')
      console.log(authToken);

      const headers={
        // 'Authorization': `Token ${authToken}`,
        'Content-Type': "application/json",

      };
  
      // Update the content field
      existingDocument.content = content;
  
      // Save the updated document
      const updateResponse = await axios.put(url, existingDocument,{headers});
      console.log('Document updated successfully:', updateResponse.data);
    } catch (error) {
      console.log('Error updating document:', error);
    }
    // console.log({content})
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f0f0f0" // Set your desired background color
    >

      <p>Title</p>
      <Box
        width="70%" // Adjust the width as needed
        minHeight="500px"
        
        maxWidth="800px" // Set a maximum width if desired
        bgcolor="#cecbca"
        p={3}
        borderRadius={8}
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
      >
        <ReactQuill
          theme="snow"
          value={content}
          onChange={handleEditorChange}
          modules={{
            toolbar:[
              ['bold', 'italic', 'underline', 'strike'],
              [{ header: 1 }, { header: 2 }],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['code-block'],
              [{ color: [] }, { background: [] }],
              ['link', 'image'],
              ['clean'],
              // ['color'],
              
            ]
          ,
            // formats: ['color', 'background'],
          }}
          style={{ border: '1px solid #ccc', color: 'black' }}
        />
      </Box>
          {/* <Button>Update</Button> */}
          <Button variant="contained" color="primary" onClick={handleUpdateDocument}>
        Update
      </Button>
    </Box>
  );
};

export default TextEditor;
export{}