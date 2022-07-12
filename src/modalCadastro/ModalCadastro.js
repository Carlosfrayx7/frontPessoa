import axios from "axios";
import { useState } from 'react';
import ModalCadastroView from './ModalCadastroView';

const ModalCadastro = ({ openModal, setOpenModal }) => {

    const baseUrl = "https://localhost:44360/api/pessoa";
    

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const [pessoa, setPessoa] = useState({
        nome: '',
        email: '',
        telefone: '',
        whatsapp: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setPessoa({
            ...pessoa, [name]: value
        });
        console.log(pessoa);
    };

    const handleCadastrarPessoa = async () => {
        await axios.post(baseUrl +"/createpessoa", pessoa).then(response=>{
            setPessoa(response.data);
            handleGetPessoa();
            handleCloseModal();
        }).catch(error =>{
            console.log(error);
        })
    };

    const handleGetPessoa = async () => {
        await axios.get(baseUrl).then(response => {
            setPessoa(response.data)
        }).catch(error => {
            console.log(error);
        })
    };


    return (
        <ModalCadastroView {...{ openModal, handleCloseModal, handleChange, handleCadastrarPessoa }} />
    )
}

export default ModalCadastro
