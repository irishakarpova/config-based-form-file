import React,{useState} from 'react';
import { useMutation } from '@apollo/client';
import {CREATE_NEW_BANNER} from './queries'
import {CreateNewBanner} from './__generated__/CreateNewBanner'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CreateForm from '../forms/createForm'
import Snackbar from '../../utility/snackBar'

export default function() {
  const [isSnack, setIsSnack] = useState(true);
  const [createNewItem, 
    {data, loading: createLoading}] = useMutation<CreateNewBanner>(CREATE_NEW_BANNER);

  const handleCloseSnack = () => {
    setIsSnack(false);
  } 
 
  return(
    <div>
      <Grid container>
        <Grid item xs={12} sm={10} md={6} lg={5} xl={4}>
          <Box p={3}>
            {data ? (
              <Snackbar 
              open={isSnack}
                handleCloseSnack={handleCloseSnack} 
                text='Banner successfully created!'/>
            ): null}

            <Typography variant='h4' color="primary">
              Create a new Banner
            </Typography>
      
            <CreateForm
              setIsSnack={setIsSnack}
              data={data}
              createLoading={createLoading} 
              createNewItem={createNewItem}
            />
            
          </Box>
        </Grid>
      </Grid>
    </div>
  ) 
}
