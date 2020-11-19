import React from 'react';
import {DropzoneArea} from 'material-ui-dropzone'
import {useStyles} from './createFormStyles'

interface ItemProps{
  name: string
  label: string
  setFile: Function
  //onFileChange: (files: File[]) => void
}

export default(props: ItemProps): JSX.Element => {
    const classes = useStyles();

    const onFileChange = (file: any[]): void =>  {
        let reader: any = new FileReader();
        if (file[0]){
          reader.onload = function(upload:any) {
            props.setFile(upload.target.result);
          };
          reader.readAsDataURL(file[0]);
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

 