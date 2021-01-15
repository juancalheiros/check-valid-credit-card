import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    marginTop: "25px",
  },
}));

export function SendButton() {
  const classes = useStyles();

  return (  
      <Button
        variant="outlined"
        color="primary"
        size="small"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
  );
}
