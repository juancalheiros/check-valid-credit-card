import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';


const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  

export default function SalveButton(props){
    const {
      habilited,
      handleShowNumberCreditCard,
      numberCreditCard,
      handleShowCVV,
      cvv,
      handleShowExpirateDate,
      expirateDate,
      handleShowConfirmationData,
      handleCanHabilitSaveButton,
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
          handleShowNumberCreditCard(false)
          handleShowCVV(true)
          handleCanHabilitSaveButton(false)
          break
        
        case 2:  
          handleShowCVV(false)
          handleShowExpirateDate(true)
          handleCanHabilitSaveButton(false)
          break
        
        case 3: 
          handleShowExpirateDate(false)
          handleShowConfirmationData(true)
          handleCanHabilitSaveButton(true)
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