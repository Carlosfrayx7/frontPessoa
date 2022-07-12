import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@mui/material';
import React from 'react';
import useStyles from './ModalCadastroStyle';


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}


function ModalCadastroView({ handleCadastrarPessoa, handleChange, openModal, handleCloseModal }) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);


    const body = (
        <Box display="flex" color="primary" style={modalStyle} className={classes.paper} alignItems="center" p={5} boxShadow={3} >
            <Typography variant="h6" align="center" marginTop="5px"
                component="div" sx={{ flexGrow: 1 }}>
                Cadastro
            </Typography>
            <Grid item xs={7}>
                <FormControl style={{ width: '165%', margin: '10px', marginTop: '5%' }}>
                    <TextField id="outlined-basic" label="Nome" name="nome" onChange={handleChange} variant="outlined" />
                </FormControl>
                <FormControl style={{ height: '100%', width: '165%', margin: '10px', marginTop: '5%' }}>
                    <TextField id="outlined-basic" label="E-mail" name="email" onChange={handleChange} variant="outlined" />
                </FormControl>
                <FormControl style={{ height: '100%', width: '165%', margin: '10px', marginTop: '5%' }}>
                    <TextField id="outlined-basic" label="Telefone" name="telefone" onChange={handleChange} variant="outlined" />
                </FormControl>
                <FormControl style={{ height: '100%', width: '165%', margin: '10px', marginTop: '5%' }}>
                    <TextField id="outlined-basic" label="WhatsApp" name="whatsapp" onChange={handleChange} variant="outlined" />
                </FormControl>
                <FormControl style={{ height: '100%', width: '165%', margin: '10px', marginTop: '5%' }} >
                    <Box style={{ width: '100%', height: '5%' }} mb={1.5}>
                        <Button variant="contained" style={{ width: '49%', height: '100%', fontSize: '0.9vw', marginRight: '2%', backgroundColor: '#BA7EA2', color: 'white' }} onClick={handleCloseModal}>Cancelar</Button>
                        <Button variant="contained" style={{ width: '49%', height: '100%', fontSize: '0.9vw', backgroundColor: '#0094A9', color: 'white' }} onClick={handleCadastrarPessoa}>Salvar</Button>
                    </Box>
                </FormControl>
            </Grid>
        </Box>
    );

    return (

        <div className={classes.modal}>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

export default ModalCadastroView;