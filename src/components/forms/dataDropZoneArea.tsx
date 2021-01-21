import React, {Dispatch, SetStateAction} from 'react';
import {DropzoneArea} from 'material-ui-dropzone'
import {useStyles} from './createFormStyles'

interface ItemProps{
  name: string
  label: string
  file: string | undefined
  setFile: Dispatch<SetStateAction<undefined>>
}

export default(props: ItemProps): JSX.Element => {
  const classes = useStyles();

  const onFileChange = (files: File[]): void =>  {
      let reader: any = new FileReader();
      if (files[0]){
        reader.onload = function(upload:any) {
          props.setFile(upload.target.result);
        };
        reader.readAsDataURL(files[0]);
      }
  }

  return(
      <DropzoneArea
          key={`index${props.name}`}
          filesLimit={1}
          maxFileSize={2000000}
          inputProps={{
            name: props.name,
          }}
          showAlerts={true}
          dropzoneParagraphClass={classes.dropzoneParagraph}
          alertSnackbarProps={{
            anchorOrigin: { vertical: 'top', horizontal: 'right' }
          }}
          onChange={onFileChange} 
      />
  )
}

 