import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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
  