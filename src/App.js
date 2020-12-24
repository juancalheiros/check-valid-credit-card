import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { NumberCreditCard, MounthYear  } from './Component/index'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export function App() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <NumberCreditCard/>
      <MounthYear/>
    </form>
  );
}