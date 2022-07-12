import { makeStyles } from "@material-ui/core";
import { positions } from "@mui/system";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(0.5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '99%',
        
    },
    btnInserir:{
        fontSize: "20px", 
        height: '40px', 
        backgroundColor: "#0094A9",
        justifyContent:'flex-end'
    },
  }));

  export default useStyles;
  