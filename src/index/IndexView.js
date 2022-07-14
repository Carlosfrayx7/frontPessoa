

// importing material UI components
import { Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ModalCadastro from "../modalCadastro/ModalCadastro";
import ModalEditar from "../modalEditar/ModalEditar";
import ModalExcluir from "../modalExcluir/ModalExcluir";
import Pessoa from "../pessoa/Pessoa";
import useStyles from './IndexStyle';

const IndexView = ({ handleCadastrar, openModal, setOpenModal, pessoa, openModalEditar, setOpenModalEditar, handleEditar, dados, setOpenModalExcluir, openModalExcluir, handleDelete, idPessoa, handleGetPessoa, setPessoa }) => {

  const classes = useStyles();
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6"
            component="div" sx={{ flexGrow: 1 }}>
            Cadastro de pessoas
          </Typography>

        </Toolbar>

      </AppBar>

      <Box style={{ height: 'calc(100% - 64px)' }} pl={2} pr={1}>
        <Box style={{ height: '10%' }}>
          <Box className={classes.paper} elevation={3} >

          </Box>
          <Box style={{ display: 'table', width: '100%', height: '70%' }}>
            <Grid item xs={3} style={{ marginTop: '15px', marginBottom: '15px', display: 'flex', justifyContent: 'flex-end' }}>
              <Grid item xs={9} style={{ display: 'flex' }}>
                <Button variant="contained" color="primary" className={classes.btnInserir} onClick={handleCadastrar}>Cadastrar</Button>
              </Grid>

            </Grid>
          </Box>
          <Pessoa pessoa={pessoa} handleEditar={handleEditar} handleDelete={handleDelete} />

        </Box>
        <ModalCadastro openModal={openModal} setOpenModal={setOpenModal} handleGetPessoa={handleGetPessoa} />
        <ModalEditar openModalEditar={openModalEditar} setOpenModalEditar={setOpenModalEditar} pessoa={dados} setPessoa={setPessoa}   />
        <ModalExcluir openModalExcluir={openModalExcluir} setOpenModalExcluir={setOpenModalExcluir} idPessoa={idPessoa} handleGetPessoa={handleGetPessoa} />
      </Box>
    </Box>
  );
}


export default IndexView;