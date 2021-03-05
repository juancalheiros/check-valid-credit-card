import React, {useState} from 'react'
import { connect } from 'react-redux'
import {
  Card, 
  CardContent, 
  CardMedia, 
  makeStyles, 
  Typography 
} from '@material-ui/core'

import { 
  CreditCardNumber,
  SaveButton,
  CVV,
  ExpirationDate,
  ConfirmationData
} from './Component'


const useStyles = makeStyles(() => ({
    root: {
      marginTop: "10%",
      marginLeft: "50%",
      maxHeight: "500px",
      maxWidth: "400px",
      marginInline: "auto",
    },
    cardContent: {
      textAlignLast: "center",
    }
  })
);

const  App = props => {

  const classes = useStyles()
  const {
    creditCard,
    cvv,
    date, 
  } = props
  

  const [creditCardNumber, setCreditCardNumber] = useState(creditCard)
  const [canShowCreditCardNumber,setCanShowCreditCardNumber] = useState(true)

  const [cardVerificationValue,setCardVerificationValue] = useState(cvv)
  const [canShowCardVerificationValue,setCanShowCardVerificationValue] = useState(false)
  
  const [expirateDate,setExpirateDate] = useState(date)
  const [canShowExpirationDate,setCanShowExpirationDate] = useState(false)

  const [canShowConfirmationData, setCanShowConfirmationData] = useState(false)
  
  const [canHabilitSaveButton, setCanHabilitSaveButton] = useState(false)
  

  // Number Credit Card
  const handleCreditCardNumber = value => {
    setCreditCardNumber(value)
  }

  const handleCanHaveErrorCreditCard = value => {
    setCanHabilitSaveButton(value)
  }

  const handleShowCreditCardNumber = value => {
    setCanShowCreditCardNumber(value)
  }

  // Card Verification Value
  const handleCardVerifiCationValue = value =>{
    setCardVerificationValue(value)
  }

  const handleCanHaveErrorCardVerificationValue = value => {
    setCanHabilitSaveButton(value)
  }

  const handleShowCardVerificationValue = value => {
    setCanShowCardVerificationValue(value)
  }

  // Expirate Date
  const handleExpirateDate = value => {
    setExpirateDate(value)
  }

  const handleCanHaveErrorExpirateDate = value => {
    setCanHabilitSaveButton(value)
  }

  const handleShowExpirateDate = value => {
    setCanShowExpirationDate(value)
  }

  // Confirmation Data
  const handleShowConfirmationData = value => {
    setCanShowConfirmationData(value)
  }

  // Save Button
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
          
          { canShowCreditCardNumber && 
            <CreditCardNumber 
              handleCreditCardNumber={handleCreditCardNumber}
              handleCanHaveErrorCreditCard = {handleCanHaveErrorCreditCard}
            />
          }
          
          { canShowCardVerificationValue && 
            <CVV
              handleCardVerifiCationValue={handleCardVerifiCationValue}
              handleCanHaveErrorCardVerificationValue={handleCanHaveErrorCardVerificationValue}
            />
          }
          
          { canShowExpirationDate && 
            <ExpirationDate
              handleExpirateDate={handleExpirateDate}
              handleCanHaveErrorExpirateDate={handleCanHaveErrorExpirateDate}
            />
          }

          { canShowConfirmationData && <ConfirmationData/> }
          
          <SaveButton 
            habilited={canHabilitSaveButton}
            handleShowCreditCardNumber ={handleShowCreditCardNumber}
            handleShowCardVerificationValue={handleShowCardVerificationValue}
            handleShowExpirateDate={handleShowExpirateDate}
            handleShowConfirmationData={handleShowConfirmationData}
            creditCard={creditCardNumber}
            cardVerificationValue={cardVerificationValue}
            date={expirateDate}
            handleCanHabilitSaveButton={handleCanHabilitSaveButton}
          />

        </CardContent>

      </Card>

    </>
  )
}

const mapStateToProps = store => ({
  creditCard: store.clickState.creditCardNumber,
  cvv: store.clickState.cvv,
  date: store.clickState.expirationDate,
})

export default connect (mapStateToProps)(App)