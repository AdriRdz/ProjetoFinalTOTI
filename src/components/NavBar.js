
import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
background-image: linear-gradient(135deg, #8EB5F0, #290a52, #300752, #1c1c6e, #1b2c4e, #1f1d86, #3c29e4, #092164);  
`

const Tabs = styled(NavLink)`
font-size: 20px;
margin-right: 20px;
color: white;
text-decoration: none;
font-weight: bold;
justify-content: end;
`

const NavBar = () => {
    return (
        <Header position='static'>
            <Toolbar>
                
                <Tabs to="/">Instituto de tecnologia e saber</Tabs>
                <Tabs to="/">Home</Tabs>
                <Tabs to="/all">Todos os alunos</Tabs>
                <Tabs to="/add">Cadastrar Alunos</Tabs>
                
            </Toolbar>
        </Header>
    )
}

export default NavBar;
