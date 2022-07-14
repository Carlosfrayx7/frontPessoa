import { useEffect, useState } from "react";
import ModalEditarView from './ModalEditarView';

const ModalEditar = ({ openModalEditar, setOpenModalEditar, pessoa, handleAtualizarPessoa, setPessoa }) => {

    var nome = pessoa.nome;
    var email = pessoa.email;
    var telefone = pessoa.telefone;
    var whatsapp = pessoa.whatsapp;

    const handleCloseModal = () => {
        setOpenModalEditar(false);
    };
    
    const handleChange = e => {
        const { name, value } = e.target;
        setPessoa({
            ...pessoa, [name]: value
        });
        console.log(pessoa);
    };

    return (
        <ModalEditarView {...{ openModalEditar, handleCloseModal, pessoa, handleChange, handleAtualizarPessoa, nome, email, telefone, whatsapp }} />
    )
}

export default ModalEditar
