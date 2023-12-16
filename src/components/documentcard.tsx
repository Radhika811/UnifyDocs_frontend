import DescriptionIcon from '@mui/icons-material/Description';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./documentcard.css"

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 200}}>
      <div className='documentIcon'><DescriptionIcon sx={{ fontSize: 100}}/></div>
      <CardContent sx={{ paddingBottom: 0}}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 20}}>
          DocumentName
        </Typography>
      </CardContent>
      <CardActions sx={{ paddingTop: 0}}>
        <Button sx={{ fontSize: 10}}>Share</Button>
        <Button sx={{ fontSize: 10}}>Learn More</Button>
      </CardActions>
    </Card>
  );
}