import { useEffect, useState } from 'react';
import IndexView from './IndexView';
import axios from "axios";

const Index = () => {

    const baseUrl = "https://localhost:44360/api/pessoa";

    const [pessoa, setPessoa] = useState([]);
    const [idPessoa, setIdPessoa] = useState('');
    const [dados, setDados] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [openModalEditar, setOpenModalEditar] = useState(false);
    const [openModalExcluir, setOpenModalExcluir] = useState(false);


    const handleGetPessoa = async () => {
        await axios.get(baseUrl).then(response => {
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
    }

    const handleEditar = async (idPessoa) => {
        await axios.get(baseUrl + `/porid/${idPessoa}`).then(response => {
            setDados(response.data)
        }).catch(error => {
            console.log(error);
        });
        setOpenModalEditar(!openModalEditar);
    };


    const handleCadastrar = () => {
        setOpenModal(!openModal);
    }



    return (
        <IndexView pessoa={pessoa} dados={dados}{...{ handleCadastrar, openModal, setOpenModal, openModalEditar, setOpenModalEditar, handleEditar, dados, openModalExcluir, setOpenModalExcluir, handleDelete, idPessoa, setPessoa }} />
    )
}

export default Index
