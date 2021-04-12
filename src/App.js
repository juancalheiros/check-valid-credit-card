import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  Card, 
  CardMedia, 
  makeStyles, 
  Typography,
  CardContent, 
} from '@material-ui/core'

import { 
  CVV,
  SaveButton,
  ExpirationDate,
  CreditCardNumber,
  ConfirmationData,
} from './Component'

import {  
  cvv as Cvv, 
  expirateDate as Validate, 
  creditCardNumber as Number,
} from './actions'


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
    dispatch,
  } = props
  

  const [creditCardNumber, setCreditCardNumber] = useState(creditCard)
  const [cardVerificationValue,setCardVerificationValue] = useState(cvv)
  const [expirateDate,setExpirateDate] = useState(date)
  const [step,setStep] = useState(1)
  const [canHabilitSaveButton, setCanHabilitSaveButton] = useState(false)
  
  // Number Credit Card
  const handleCreditCardNumber = value => {
    setCreditCardNumber(value)
  }

  const handleCanHaveErrorCreditCard = value => {
    setCanHabilitSaveButton(value)
  }


  // Card Verification Value
  const handleCardVerifiCationValue = value =>{
    setCardVerificationValue(value)
  }

  const handleCanHaveErrorCardVerificationValue = value => {
    setCanHabilitSaveButton(value)
  }


  // Expirate Date
  const handleExpirateDate = value => {
    setExpirateDate(value)
  }

  const handleCanHaveErrorExpirateDate = value => {
    setCanHabilitSaveButton(value)
  }

  // Step
  const handleStep = value => {
    setStep(value + 1)
  }

  // update
  const update = () => { 
    canHabilitSaveButton && dispatchValues()
  }
 
  const dispatchValues = () => {
    console.log("ok")
    switch (step) {
      case 1:
          dispatch(Number(creditCardNumber)) 
        break

      case 2:
        dispatch(Cvv(cardVerificationValue))
        break

      case 3:
        dispatch(Validate(expirateDate))
        break

      default:
        break
    }

  }

  update()

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
          
          { step === 1  && 
            <CreditCardNumber 
              handleCreditCardNumber={handleCreditCardNumber}
              handleCanHaveErrorCreditCard = {handleCanHaveErrorCreditCard}
            />
          }
          
          { step === 2 && 
            <CVV
              handleCardVerifiCationValue={handleCardVerifiCationValue}
              handleCanHaveErrorCardVerificationValue={handleCanHaveErrorCardVerificationValue}
            />
          }
          
          { step === 3 && 
            <ExpirationDate
              handleExpirateDate={handleExpirateDate}
              handleCanHaveErrorExpirateDate={handleCanHaveErrorExpirateDate}
            />
          }

          { step === 4 && <ConfirmationData/> }
          
          <SaveButton 
            habilited={canHabilitSaveButton}
            step={ () => handleStep(step) }
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

const mapDispatchToProps = dispatch => ({dispatch})

export default connect (mapStateToProps,mapDispatchToProps)(App)