import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CreateForm from '../forms/createForm'
import SnackbarInt from '../../utility/snackBar'


const Configform: React.FC  = (): JSX.Element => {

  return(
    <div>
      <Grid container>
        <Grid item xs={12} sm={10} md={6} lg={5} xl={4}>
          <Box p={3}>
            
            <SnackbarInt 
              text='Banner successfully created!'/>
            
            <Typography variant='h3' color="primary">
              Create a new Banner
            </Typography>
            <CreateForm/>
          </Box>
        </Grid>
      </Grid>
    </div>
  ) 
}
export default Configform
