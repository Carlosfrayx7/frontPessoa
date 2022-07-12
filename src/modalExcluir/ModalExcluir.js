import axios from "axios";
import { useState } from 'react';
import ModalExcluirView from './ModalExcluirView';

const ModalExcluir = ({ openModalExcluir, setOpenModalExcluir, idPessoa, handleGetPessoa }) => {

    const baseUrl = "https://localhost:44360/api/pessoa";
    

    const handleCloseModal = () => {
        setOpenModalExcluir(false);
    };

    const [dados, setDados] = useState();

    const handleDeletar = async (idPessoa) => {
        await axios.delete(baseUrl + `/deletepessoa/${idPessoa}`).then(response => {
            setDados(response.data)
            handleGetPessoa();
        }).catch(error => {
            console.log(error);
        });
        handleCloseModal();
    };


    return (
        <ModalExcluirView {...{ openModalExcluir, handleCloseModal, handleDeletar, idPessoa }} />
    )
}

export default ModalExcluir
