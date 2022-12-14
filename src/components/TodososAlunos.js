import { useEffect, useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button } from '@mui/material';
import { getUsers, deleteUser } from '../service/api';
import { Link } from 'react-router-dom';

import './TodosOsAlunos.css'


const TodososAlunos = () => {

    const [users, setUsers] = useState([])

    const StyledTable = styled(Table)`
    width: 100vw;
    table-layout: static;
    `;
    
    const Thead = styled(TableRow)`
    max-width: 1200px;
    background: #000;
    & > th{
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        overflow-wrap: break-word;
    }
    `;

    const TBody = styled(TableRow)`
    & > td{
        overflow-wrap: break-word;
        font-size: 20px;
    }
    `;

    useEffect(() => {
        getUsersDetails();
    }, [])

    const getUsersDetails = async () => {
        let response = await getUsers();
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
                    <TableCell style={{ width: '01vw' }}>Id</TableCell>
                    <TableCell style={{ width: '24vw' }}>Nome</TableCell>
                    <TableCell style={{ width: '25vw' }}>Email</TableCell>
                    <TableCell style={{ width: '25vw' }}>Telefone</TableCell>
                    <TableCell style={{ width: '25vw' }}>Botões</TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TBody>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <div className="button-container">
                                    <Button variant="contained" color="warning" className="button" component={Link} to={`/edit/${user.id}`}>Editar</Button>
                                    <Button variant="contained" color="error" className="button" onClick={() => deleteUserData(user.id)}>Deletar</Button>
                                </div>
                            </TableCell>
                        </TBody>
                    ))
                }
            </TableBody>
        </StyledTable>
    )

}

export default TodososAlunos;