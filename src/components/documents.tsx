import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';
import MediaCard from './documentcard';
import "./documents.css"

interface Document {
  id: number;
  number: number;
  name: string;
  content: string;
}

interface users {
  id: number;
  enabled: boolean;
  name: string;
  enrollment: number;
}

const DocumentList: React.FC = () => {
  const userid = localStorage.getItem("userid")
  const [documents, setDocuments] = useState<Document[]>([]);
  const [users, setUsers] = useState<users>();
//   const history = useHistory();
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get<Document[]>('http://localhost:8000/documents/created/' + userid);
        const response2 = await axios.get<Document[]>('http://localhost:8000/documents/');
        const user = await axios.get<users>('http://localhost:8000/users/' + userid);
        if(user.data.enabled){
          setDocuments(response2.data)
        }
        else setDocuments(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    fetchDocuments();
  }, []);

  // const deleteDocuments = async (docId: number) => {
  //   const url = `http://localhost:3000/documents/${docId}`
  //   try {
  //     const response = await axios.delete(url);
  //   } catch (error) {
  //     console.error('Error while deleteing:', error)
  //   }
  // };

  // useEffect(() => {
    const deleteDocuments = async (docId: number) => {
      const url = `http://localhost:3000/documents/${docId}`
      try {
        const response = await axios.delete(url);
      } catch (error) {
        console.error('Error while deleteing:', error)
      }
    };

  //   // deleteDocuments();
  // }, []);

  const handleDocumentClick = (documentId: number) => {

    window.location.href = `http://localhost:3000/documents/${documentId}`
  };

  const handleDeleteClick = (documentId: number) => {

    deleteDocuments(documentId)
  };

//   const handleLearnMore = (documentId: number) => {

    
//   };

  return (
    <div>
      <h2 className='docHeading'>Your Documents</h2>
      <div className='documents'>
      {documents.map((document) => (
        <MediaCard
        key={document.number}
        documentData={{
          name: document.name,
          id: document.id,
          number: document.number,
          content: document.content
        }}
        onOpenClick={() => handleDocumentClick(document.id)}
        onLearnMoreClick={() => {handleDeleteClick(document.id)
        }}
      />
      ))}
      </div>
    </div>
  );
};

export default DocumentList;
export{}