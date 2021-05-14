import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  rootForm: {
    width: "100%",
    "& > *": {
      marginTop: theme.spacing(2)
    },
    "& .MuiInputBase-input": {
      paddingLeft: 20
    }
  },
  formControl: {
    width: "100%"
  },

  rootBtn: {
    color: "#E2E3E3",
    padding: "8px 20px",
    background: "linear-gradient(45deg, #242E34 10%, #445964 90%)",
    letterSpacing: 1,
    "&.Mui-disabled": {
      background: "linear-gradient(45deg, #EFEFEF 10%, #A0A0A0 90%)"
    }
  },
  dropzoneParagraph: {
    fontSize: "1rem"
  }
}));
