import React from 'react';
// import ShareButton from './ShareButton';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import ShareIcon from '@mui/icons-material/Share';


function ShareableCard({ shareContent }) {
  return (
    <Card style={{display:'inline'}}>
      <p>"id":{shareContent.id}</p>
      <CardHeader
        title={shareContent.title} // Using shareContent.title as the title prop
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
      />
      {/* <ShareIcon shareContent={shareContent} /> */}
    </Card>
  );
}

export default ShareableCard;
