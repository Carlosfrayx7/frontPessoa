import axios from "axios";
import { useEffect, useState } from "react";
import ModalEditarView from './ModalEditarView';

const ModalEditar = ({ openModalEditar, setOpenModalEditar, pessoa, setPessoa }) => {

    const baseUrl = "https://localhost:44360/api/pessoa";
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
        await axios.post(baseUrl + "/updatepessoa", dados).then(response => {
            handleGetPessoa();
            setOpenModalEditar(false);
            setDados(response.data);

        })

    }

    const handleGetPessoa = async () => {
        await axios.get(baseUrl).then(response => {
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
