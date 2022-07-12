import { useState } from "react";
import PessoaView from './PessoaView';

const Pessoa = ({pessoa, handleEditar, handleDelete}) => {

  
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <PessoaView pessoa={pessoa} {...{handleChangePage, page, rowsPerPage, handleChangeRowsPerPage, handleEditar, handleDelete}} />
    )
}

export default Pessoa
