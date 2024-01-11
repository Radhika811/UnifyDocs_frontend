import DescriptionIcon from '@mui/icons-material/Description';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./documentcard.css"

interface DocumentData {
    id: number;
    number: number;
    name: string;
    content: string;
}

interface MediaCardProps {
    documentData: DocumentData;
    onOpenClick: (documentData: DocumentData) => void;
    onLearnMoreClick: (documentData: DocumentData) => void;
}

const MediaCard: React.FC<MediaCardProps> = ({ documentData, onOpenClick, onLearnMoreClick }) => { 
  const { name } = documentData;

  return (
    <Card sx={{ maxWidth: 200}}>
      <div className='documentIcon'><DescriptionIcon sx={{ fontSize: 100}}/></div>
      <CardContent sx={{ paddingBottom: 0}}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 20}}>
          {name}
        </Typography>
      </CardContent>
      <CardActions sx={{ paddingTop: 0}}>
        <Button sx={{ fontSize: 10}} onClick={() => onOpenClick(documentData)}>Open</Button>
        <Button sx={{ fontSize: 10}} onClick={() => onLearnMoreClick(documentData)}>Delete</Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;