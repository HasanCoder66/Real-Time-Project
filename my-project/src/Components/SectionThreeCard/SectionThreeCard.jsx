import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {  CardActionArea } from '@mui/material';
// import Button from '../Button/Button'
import Button from '../Button/Button';


function SectionThreeCard({data}) {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 5 }}>
      <CardActionArea>
        <CardContent className='text-center'>
          <Typography gutterBottom variant="h5" component="div" className='text-[#097969] ' >
            {data?.title}
          </Typography>
          <Typography variant="body2" >
            {data?.desc}
          </Typography>
        </CardContent>
      <Button className='' text='Read More ' />
      </CardActionArea>
    </Card>
  );
}

export default SectionThreeCard