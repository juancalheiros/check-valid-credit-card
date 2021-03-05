import React,{ useState } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import SaveIcon from '@material-ui/icons/Save'
import { creditCardNumber, cvv, expirateDate } from '../actions'

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
}))
  

const SaveButton = props => {
    const {
      habilited,
      handleShowCreditCardNumber,
      creditCard,
      handleShowCardVerificationValue,
      cardVerificationValue,
      handleShowExpirateDate,
      date,
      handleShowConfirmationData,
      handleCanHabilitSaveButton,
      dispatch,
    } = props
    
    const classes = useStyles();
    const [countClick,setCountClick] = useState(1)
  
    const handleClick = () => {
      setCountClick(countClick + 1)
      
      setUpdates()
    }

    const setUpdates = () => {
      switch (countClick){
        case 1: 
          handleShowCreditCardNumber(false)
          handleShowCardVerificationValue(true)
          handleCanHabilitSaveButton(false)
          dispatch(creditCardNumber(creditCard))
          break
        
        case 2:  
          handleShowCardVerificationValue(false)
          handleShowExpirateDate(true)
          handleCanHabilitSaveButton(false)
          dispatch(cvv(cardVerificationValue))
          break
        
        case 3: 
          handleShowExpirateDate(false)
          handleShowConfirmationData(true)
          handleCanHabilitSaveButton(true)
          dispatch(expirateDate(date))
          break

        case 4: 
          break
        
        default:
      }
      
    }

    
    return (
        <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleClick}   
            disabled={!habilited}
            className={classes.button}
            startIcon={<SaveIcon />}
        >
            Save
      </Button>
    )
}

const mapStateToProps = () => ({})
const mapDispatchToProps = dispatch => ({dispatch})


export default connect(mapStateToProps, mapDispatchToProps)(SaveButton)