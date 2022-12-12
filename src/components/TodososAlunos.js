import { useEffect, useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button } from '@mui/material';
import { getUsers, deleteUser } from '../service/api';
import { Link } from 'react-router-dom';


const TodososAlunos = () => {

    const [users, setUsers] = useState([])

    const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto 0 auto;
    `
        ;

    const Thead = styled(TableRow)`
    background: #000;
    & > th{
        color: #fff;
        font-size: 20px;
        font-weight: bold;
    }
    `
        ;

    const TBody = styled(TableRow)`
    & > td{
        font-size: 20px;
    }
    `


    useEffect(() => {
        getUsersDetails();
    }, [])

    const getUsersDetails = async () => {
        let response = await getUsers();
        console.log(response);
        setUsers(response.data);
    }

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getUsersDetails();
    }

    return (
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>Id</TableCell>
                    <TableCell>Nome</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Telefone</TableCell>
                    <TableCell></TableCell>
                </Thead>

            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TBody>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            {/* <TableCell>{user.username}</TableCell> */}
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user.id}`}>Editar</Button>
                                <Button variant="contained" color="secondary" onClick={() => deleteUserData(user.id)}>Deletar</Button>
                            </TableCell>
                        </TBody>
                    ))
                }
            </TableBody>
        </StyledTable>
    )

}

export default TodososAlunos;