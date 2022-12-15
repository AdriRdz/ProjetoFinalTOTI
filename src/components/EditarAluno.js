import { useState, useEffect } from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom';
import { getUser, editUser } from '../service/api';
import "./EditarAluno.css"

const Container = styled(FormGroup)`
width:50%;
margin: 5% auto 0 auto;
& > div{
    margin-top: 20px;
}
`
const initialValues = {
    name: '',
    email: '',
    phone: ''
}

const EditarAluno = () => {

    const [user, setUser] = useState(initialValues);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getUserData();
    }, [])

    const getUserData = async () => {
        let response = await getUser(id);
        setUser(response.data);
    }

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = async () => {
        await editUser(user, id);
        navigate("/all");
    }

    return (
        <Container>
            <Typography variant="h4">Editar Aluno</Typography>
            <FormControl>
                <InputLabel>Nome Completo</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" value={user.name} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" value={user.email} />
            </FormControl>
            <FormControl>
                <InputLabel>Telefone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone} />
            </FormControl>
            <FormControl>
                <Button onClick={() => addUserDetails()} variant="contained" className='Btn_Editar'>Editar</Button>
            </FormControl>
        </Container>
    )
}

export default EditarAluno;