const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%'
    },
    divRoot: {
        height: "100%"
    },
    paper: {
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        overflow: 'hidden'
    },
    table: {
        height: '100px',
        overflowY: 'scroll'
    },
    tableContainer: {
        height: "100%"
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
    buttonAtualizar: {
        color: "#FFFF00"
    },
    buttonDeletar: {
        color: "##FF0000"
    },
    botoesAcoes: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    tableCellEmpty: {
        borderBottom: "none"
    },
    pagination: {
        height: '15%',
        overflow: 'hidden'
    }
}));

export default useStyles;