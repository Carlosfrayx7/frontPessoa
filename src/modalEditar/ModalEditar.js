import { useEffect, useState } from "react";
import ModalEditarView from './ModalEditarView';

const ModalEditar = ({ openModalEditar, setOpenModalEditar, pessoa, handleAtualizarPessoa }) => {

    var nome = pessoa.nome;
    const [email, setEmail] = useState(pessoa.email ?? "");
    const [telefone, settelefone] = useState(pessoa.telefone ?? "");
    const [whatsapp, setWhatsapp] = useState(pessoa.whatsapp ?? "");

    const handleCloseModal = () => {
        setOpenModalEditar(false);
    };



const handleChange = (event) => {
    nome = event.target.value;
};

    return (
        <ModalEditarView {...{ openModalEditar, handleCloseModal, pessoa, handleChange, handleAtualizarPessoa, nome, email, telefone, whatsapp }} />
    )
}

export default ModalEditar
