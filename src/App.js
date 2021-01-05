import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import { NumberCreditCard,SendButton } from './Component/index'
import { CardContent, CardMedia, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
      marginTop: "10%",
      marginLeft: "50%",
      maxHeight: "400px",
      maxWidth: "400px",
      marginInline: "auto",
    },
    cardContent: {
      paddingLeft: "50px",
      paddingRight: "50px",
      marginInline: "auto",
    }
  })
);

export function App() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="200"
        image="https://veja.abril.com.br/wp-content/uploads/2019/01/economia-cartao-de-credito-20170929-004.jpg?quality=70&strip=info&resize=680,453"
        title="Verify Number Card"
      />

      <CardContent className={classes.cardContent}>

        <Typography 
          gutterBottom
          paragraph
          variant="h6" 
          component="h2" 
          color="textPrimary"
        >
          Verify Number Card
        </Typography>
        <NumberCreditCard/>
        <SendButton/>

      </CardContent>

    </Card>
  );
}