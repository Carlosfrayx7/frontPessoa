import axios from "axios";
import { useState } from "react";
import { ax } from "../services/Api";
import ModalEditarView from './ModalEditarView';

const ModalEditar = ({ openModalEditar, setOpenModalEditar, pessoa, setPessoa }) => {

    var nome = pessoa.nome;
    var email = pessoa.email;
    var telefone = pessoa.telefone;
    var whatsapp = pessoa.whatsapp;

    const [dados, setDados] = useState([])

    const handleCloseModal = () => {
        setOpenModalEditar(false);
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setDados({
            ...pessoa, [name]: value
        });
        console.log(pessoa);
    };

    const handleAtualizarPessoa = async () => {
        await ax.post("/updatepessoa", dados).then(response => {
            setDados(response.data);
        });
        setOpenModalEditar(false);
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
        <ModalEditarView {...{ openModalEditar, handleCloseModal, pessoa, handleChange, handleAtualizarPessoa, nome, email, telefone, whatsapp }} />
    )
}

export default ModalEditar
