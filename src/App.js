import React from 'react'
import { CreditCardNumber,SalveButton } from './Component'
import {
  Card, 
  CardContent, 
  CardMedia, 
  makeStyles, 
  Typography 
} from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root: {
      marginTop: "10%",
      marginLeft: "50%",
      maxHeight: "400px",
      maxWidth: "400px",
      marginInline: "auto",
    },
    cardContent: {
      textAlignLast: "center",
    }
  })
);

export function App() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        
        <CardMedia
          height="200"
          component="img"
          alt="Contemplative Reptile"
          title="Verify Number Card"
          image="https://veja.abril.com.br/wp-content/uploads/2019/01/economia-cartao-de-credito-20170929-004.jpg?quality=70&strip=info&resize=680,453"
          
        />

        <CardContent className={classes.cardContent}>

          <Typography 
            paragraph
            gutterBottom
            variant="h6" 
            component="h2" 
            color="textPrimary"
          >
            Verify Number Credit Card
          </Typography>
          {true && <CreditCardNumber/>}
          <SalveButton/>
        </CardContent>

      </Card>

    </>
  )
}
