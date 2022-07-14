import axios from "axios";
import { useState } from 'react';
import { ax } from "../services/Api";
import ModalExcluirView from './ModalExcluirView';

const ModalExcluir = ({ openModalExcluir, setOpenModalExcluir, idPessoa, setPessoa }) => {

    const handleCloseModal = () => {
        setOpenModalExcluir(false);
    };

    const [dados, setDados] = useState();

    const handleDeletar = async (idPessoa) => {
        await ax.delete(`/deletepessoa/${idPessoa}`).then(response => {
            setDados(response.data)
        });
        handleCloseModal();
        handleGetPessoa();
    };

    const handleGetPessoa = async () => {
        await ax.get().then(response => {
            setPessoa(response.data)
        }).catch(error => {
            console.log(error);
        })
    };

    return (
        <ModalExcluirView {...{ openModalExcluir, handleCloseModal, handleDeletar, idPessoa }} />
    )
}

export default ModalExcluir
