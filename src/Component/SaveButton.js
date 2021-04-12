import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import SaveIcon from '@material-ui/icons/Save'

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
}))
  

const SaveButton = props => {
    const {
      habilited,
      step,
    } = props
    
    const classes = useStyles();
    
    return (
        <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={step}   
            disabled={!habilited}
            className={classes.button}
            startIcon={<SaveIcon />}
        >
            Next
      </Button>
    )
}

export default SaveButton