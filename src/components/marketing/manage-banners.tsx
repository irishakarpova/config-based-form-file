import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CreateForm from '../forms/createForm'
import SnackbarInt from '../../utility/snackBar'


const Configform: React.FC  = (): JSX.Element => {

  return(
        <React.Fragment>
          <Box p={3}>
            <SnackbarInt 
              text='Banner successfully created!'/>
            <Typography variant='h3' color="primary">
              Create a new Banner
            </Typography>
            <CreateForm/>
          </Box>
        </React.Fragment>


  ) 
}
export default Configform
