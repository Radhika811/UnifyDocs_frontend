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

const DocumentList: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
//   const history = useHistory();

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get<Document[]>('http://localhost:8000/documents/');
        setDocuments(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    fetchDocuments();
  }, []);

  const handleDocumentClick = (documentId: number) => {

    window.location.href = `http://localhost:3000/documents/${documentId}`
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
        onOpenClick={() => handleDocumentClick(document.number)}
        onLearnMoreClick={() => {
        }}
      />
      ))}
      </div>
    </div>
  );
};

export default DocumentList;
export{}