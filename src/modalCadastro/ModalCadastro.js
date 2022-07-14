import { useEffect, useState } from 'react';
import { ax } from "../services/Api";
import ModalCadastroView from './ModalCadastroView';

const ModalCadastro = ({ openModal, setOpenModal }) => {

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
        await ax.post("/createpessoa", pessoa).then(response => {
            setPessoa(response.data);
            
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

    useEffect(() => {
        handleGetPessoa();
    }, []);

    return (
        <ModalCadastroView {...{ openModal, handleCloseModal, handleChange, handleCadastrarPessoa }} />
    )
}

export default ModalCadastro
