import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
background-image: linear-gradient(135deg, #87858a, #716e74, #6c6a6d, #5d5d5e, #464647,  #323233, #2b2b2c, #171718);
display: flex;
align-items: flex-end; !important
width: 100vw !important;
`

const Tabs = styled(NavLink)`
font-size: 20px;
margin-right: 20px;
color: white;
text-decoration: none;
font-weight: bold;
float: left;
`

const NavBar = () => {
    return (
        <Header position='static'>
            <Toolbar>
                <Tabs to="/">Home</Tabs>
                <Tabs to="/all">Alunos</Tabs>
                <Tabs to="/add">Cadastrar</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;
