import React,{useState} from 'react';
import { useMutation } from '@apollo/client';
import {CREATE_NEW_BANNER} from './queries'
import {CreateNewBanner} from './__generated__/CreateNewBanner'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CreateForm from '../forms/createForm'
import SnackbarInt from '../../utility/snackBar'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export default function() {
  const [isSnack, setIsSnack] = useState(true);
  const [createNewItem, 
    {data, error, loading: createLoading}] = useMutation<CreateNewBanner>(CREATE_NEW_BANNER);
    
  const handleCloseSnack = () => {
    setIsSnack(false);
  } 

  let errorMessage: string | undefined;
  if (error){
    if(
      error.networkError &&
      typeof window !== 'undefined' &&
      !window.navigator.onLine
    ){
      errorMessage =`Error! ${error.message}`;
    }else{
      errorMessage = `Error! ${error.message}`;
    }
  }
 
  return(
    <div>
      <Grid container>
        <Grid item xs={12} sm={10} md={6} lg={5} xl={4}>
          <Box p={3}>
            {error && (
              <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
                open={isSnack} 
                onClose={handleCloseSnack}>
                <Alert variant="filled" severity="error">
                  {errorMessage}
                </Alert>
              </Snackbar>
            )}
            {data && (
              <SnackbarInt 
                open={isSnack}
                handleCloseSnack={handleCloseSnack} 
                text='Banner successfully created!'/>
            )}

            <Typography variant='h4' color="primary">
              Create a new Banner
            </Typography>
      
            <CreateForm
              setIsSnack={setIsSnack}
              data={data}
              error={error}
              createLoading={createLoading} 
              createNewItem={createNewItem}
            />
            
          </Box>
        </Grid>
      </Grid>
    </div>
  ) 
}
