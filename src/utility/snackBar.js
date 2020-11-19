import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    MuiAlert:{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.light,
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    },
    MuiSnackbar:{
        top: 50,
        [theme.breakpoints.up('sm')]: {
            top: 30,
        },
    },

}))
  
export default function(props) {
  const classes = useStyles();

  return(
    <Snackbar
        classes={{root: classes.MuiSnackbar}}
        autoHideDuration={2000}
        onClose={props.handleCloseSnack}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={props.open}
    >
        <Alert classes={{root: classes.MuiAlert}} severity="success" onClose={props.handleCloseSnack}>
            {props.text}
        </Alert>
    </Snackbar>
  ) 
}
