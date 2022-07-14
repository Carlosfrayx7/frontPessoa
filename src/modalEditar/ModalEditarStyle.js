import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        height: "60%",
        width: "40%",
        backgroundColor: theme.palette.background.paper,
        borderRadius: '5px',
        boxShadow: theme.shadows[5],
        margin: '0px',
        verticalAlign: 'center',

    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign: 'center',
    },
    root: {
        flexGrow: 1,
    },
    btnInserir:{
        fontSize: "20px", 
        height: '40px', 
        backgroundColor: "#0094A9" 
    },
}));


export default useStyles;
