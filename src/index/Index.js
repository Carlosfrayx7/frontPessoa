import { useEffect, useState } from 'react';
import { ax } from '../services/Api';
import IndexView from './IndexView';

const Index = () => {

    const [pessoa, setPessoa] = useState([]);
    const [idPessoa, setIdPessoa] = useState('');
    const [dados, setDados] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [openModalEditar, setOpenModalEditar] = useState(false);
    const [openModalExcluir, setOpenModalExcluir] = useState(false);

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

    const handleDelete = (val) => {
        if (val !== null)
            setIdPessoa(val);
        setOpenModalExcluir(!openModal);
    };

    const handleEditar = async (idPessoa) => {
        await ax.get(`/porid/${idPessoa}`).then(response => {
            setDados(response.data)
        }).catch(error => {
            console.log(error);
        });
        setOpenModalEditar(!openModalEditar);
    };

    const handleCadastrar = () => {
        setOpenModal(!openModal);
    };

    return (
        <IndexView pessoa={pessoa} dados={dados}{...{ handleCadastrar, openModal, setOpenModal, openModalEditar, setOpenModalEditar, handleEditar, dados, openModalExcluir, setOpenModalExcluir, handleDelete, idPessoa, setPessoa }} />
    )
}

export default Index
