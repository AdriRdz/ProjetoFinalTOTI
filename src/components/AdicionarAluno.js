import { useState } from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { addUser } from '../service/api';
import "./AdicionarAluno.css"

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

const AdicionarAluno = () => {

    const [user, setUser] = useState(initialValues);
    const navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = async () => {
        await addUser(user);
        navigate("/all");
    }

    return (
        <Container>
            <Typography variant="h4">Adicionar Aluno</Typography>
            <FormControl>
                <InputLabel>Nome Completo</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" />
            </FormControl>
            <FormControl>
                <InputLabel>Telefone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" />
            </FormControl>
            <FormControl>
                <Button onClick={() => addUserDetails()} variant="contained" className='Btn_Adicionar'>Adicionar</Button>
            </FormControl>
        </Container>
    )
}

export default AdicionarAluno;