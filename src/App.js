import React, {useState} from 'react'

import { 
  CreditCardNumber,
  SalveButton,
  CVV,
  ExpirationDate,
  ConfirmationData
} from './Component'

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

  const [numberCreditCard, setNumberCreditCard] = useState(null)
  const [canShowNumberCreditCard,setCanShowNumberCreditCard] = useState(true)

  const [cvv,setCvv] = useState(null)
  const [canShowCVV,setCanShowCVV] = useState(false)
  
  const [expirateDate,setExpirateDate] = useState(null)
  const [canShowExpirationDate,setCanShowExpirationDate] = useState(false)

  const [canShowConfirmationData, setCanShowConfirmationData] = useState(false)
  
  const [canHabilitSaveButton, setCanHabilitSaveButton] = useState(false)
  
  //////////////////////////////////////////////
  //Number Credit Card
  const handleNumberCreditCard = value => {
    setNumberCreditCard(value)
  }

  const handleCanHaveErrorCreditCard = value => {
    setCanHabilitSaveButton(value)
  }

  const handleShowNumberCreditCard = value => {
    setCanShowNumberCreditCard(value)
  }

  //////////////////////////////////////////////
  //CVV
  const handleCVV = value =>{
    setCvv(value)
  }

  const handleCanHaveErrorCVV = value => {
    setCanHabilitSaveButton(value)
  }

  const handleShowCVV = value => {
    setCanShowCVV(value)
  }

  ///////////////////////////////////////////
  //Expirate Date
  const handleExpirateDate = value => {
    setExpirateDate(value)
  }

  const handleCanHaveErrorExpirateDate = value => {
    setCanHabilitSaveButton(value)
  }

  const handleShowExpirateDate = value => {
    setCanShowExpirationDate(value)
  }

  ////////////////////////////////////////
  //Confirmation Data
  const handleShowConfirmationData = value => {
    setCanShowConfirmationData(value)
  }

  ////////////////////////////////////////
  //SalveButton
  const handleCanHabilitSaveButton = value => {
    setCanHabilitSaveButton(value)
  }
  
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
          
          { canShowNumberCreditCard && 
            <CreditCardNumber 
              handleNumberCreditCard={handleNumberCreditCard}
              handleCanHaveErrorCreditCard = {handleCanHaveErrorCreditCard}
            />
          }
          
          { canShowCVV && 
            <CVV
              handleCVV={handleCVV}
              handleCanHaveErrorCVV={handleCanHaveErrorCVV}
            />
          }
          
          { canShowExpirationDate && 
            <ExpirationDate
              handleExpirateDate={handleExpirateDate}
              handleCanHaveErrorExpirateDate={handleCanHaveErrorExpirateDate}
            />
          }

          { canShowConfirmationData && 
            <ConfirmationData 
              numberCreditCard = {numberCreditCard}
              cvv={cvv}
              expirateDate={expirateDate}
            />
          }
          
          <SalveButton 
            habilited={canHabilitSaveButton}
            handleShowNumberCreditCard ={handleShowNumberCreditCard}
            handleShowCVV={handleShowCVV}
            handleShowExpirateDate={handleShowExpirateDate}
            handleShowConfirmationData={handleShowConfirmationData}
            numberCreditCard={numberCreditCard}
            cvv={cvv}
            expirateDate={expirateDate}
            handleCanHabilitSaveButton={handleCanHabilitSaveButton}
          />

        </CardContent>

      </Card>

    </>
  )
}
