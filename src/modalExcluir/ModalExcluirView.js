import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import { Typography } from '@mui/material';
import React from 'react';
import useStyles from './ModalExcluirStyle';


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}


function ModalExcluirView({ handleDeletar, openModalExcluir, handleCloseModal, idPessoa }) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);


    const body = (
        <Box display="flex" color="primary" style={modalStyle} className={classes.paper} alignItems="center" p={5} boxShadow={3} >
            <Typography variant="h6" align="center" marginTop="30px"
                component="div" sx={{ flexGrow: 1 }}>
                Confirma exclusão da pessoa?
            </Typography>
            <Grid item xs={7}>
                <FormControl style={{ height: '100%', width: '165%', margin: '10px', marginTop: '5%' }} >
                    <Box style={{ width: '100%', height: '5%' }} mb={1.5}>
                        <Button variant="contained" style={{ width: '49%', height: '100%', fontSize: '0.9vw', marginRight: '2%', backgroundColor: '#BA7EA2', color: 'white' }} onClick={handleCloseModal}>Não</Button>
                        <Button variant="contained" style={{ width: '49%', height: '100%', fontSize: '0.9vw', backgroundColor: '#0094A9', color: 'white' }} onClick={() => handleDeletar(idPessoa)}>Sim</Button>
                    </Box>
                </FormControl>
            </Grid>
        </Box>
    );

    return (

        <div className={classes.modal}>
            <Modal
                open={openModalExcluir}
                onClose={handleCloseModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

export default ModalExcluirView;