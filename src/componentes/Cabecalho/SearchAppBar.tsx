import React, { useState } from 'react'; // Import useState
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { AcessoProfessor, LoginForm } from './index.tsx';
import { Link, useNavigate } from 'react-router';

const isLoggedIn = false; // Simulação de estado de login

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar() {
    const [searchTerm, setSearchTerm] = useState(''); // 1. State for search term
    const navigate = useNavigate(); // 2. Get navigate function

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => { // 2. Handler for input change
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => { // 3. Handler for form submit
        event.preventDefault(); // Prevent default form submission behavior
        if (searchTerm.trim()) { // Only navigate if searchTerm is not empty
            // 3. Navigate to search results page with query parameter
            navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <Link to={`/`}>
                            Blog da Turma
                        </Link>
                    </Typography>
                    <Search>
                        {/* 4. Wrap in a form and add onSubmit */}
                        <form onSubmit={handleSearchSubmit}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                value={searchTerm} // 5. Bind value to state
                                onChange={handleSearchChange} // 6. Update state on change
                            />
                        </form>
                    </Search>
                    <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                        {!isLoggedIn ? (
                            <AcessoProfessor />
                        ) : (
                            <LoginForm />
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
