
import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
background-image: linear-gradient(135deg, #171718, #2b2b2c, #323233, #464647, #5d5d5e, #6c6a6d, #716e74, #87858a);
`

const Tabs = styled(NavLink)`
font-size: 20px;
margin-right: 20px;
color: white;
text-decoration: none;
font-weight: bold;
float: right;
text-align: center;
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
