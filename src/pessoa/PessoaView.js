import { IconButton, TableBody, TablePagination, Tooltip } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import useStyles from './PessoaStyle';


const PessoaView = ({ pessoa, page, handleChangePage, rowsPerPage, handleChangeRowsPerPage, handleDelete, handleEditar }) => {
    const classes = useStyles();

    return (
        <div className={classes.divRoot} >
            <>
         
            
                <TableContainer component={Paper} className={classes.tableContainer}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell><b>Nome</b></TableCell>
                                <TableCell><b>Email</b></TableCell>
                                <TableCell><b>Telefone</b></TableCell>
                                <TableCell><b>WhatsApp</b></TableCell>
                                <TableCell align="center" width="100">
                                    <b>Ações</b>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {pessoa &&
                                pessoa
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((pessoas, idx) => (
                                            <TableRow style={{ backgroundColor: 'white' }} key={pessoas.id + "_" + idx} hover>
                                                <TableCell>{pessoas.nome}</TableCell>
                                                <TableCell>{pessoas.email}</TableCell>
                                                <TableCell>{pessoas.telefone}</TableCell>
                                                <TableCell>{pessoas.whatsapp}</TableCell>
                                                <TableCell padding="none" align="center">

                                                    <div className={classes.botoesAcoes}>
                                                        <Tooltip title="Editar" aria-label="add" enterDelay={0}>
                                                            <IconButton className={classes.buttonAtualizar} aria-label="Atualizar" component="span" onClick={() => handleEditar(pessoas.id)}>
                                                                <UpdateIcon />
                                                            </IconButton>
                                                        </Tooltip>
                                                        <Tooltip title="Deletar" aria-label="add" enterDelay={0}>
                                                            <IconButton className={classes.buttonDeletar} aria-label="Deletar" component="span" onClick={() => handleDelete(pessoas.id)} >
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </Tooltip>

                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                    ))}

                            {pessoa && !pessoa.length && <TableRow><TableCell className={classes.tableCellEmpty} colSpan={6}></TableCell></TableRow>}

                        </TableBody>
                    </Table>

                </TableContainer>

            </>
            <TablePagination
                rowsPerPageOptions={[10]}
                component="div"
                count={pessoa.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                labelRowsPerPage='Itens por página'
                labelDisplayedRows={({ from, to, count }) => { return from + ' - ' + to + ' de ' + count }}
                className={classes.pagination}
            />

        </div >
    )
};


export default PessoaView;
