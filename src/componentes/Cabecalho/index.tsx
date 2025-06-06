import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import Box from '@mui/material/Box';
import AcessoProfessor from '../AcessoProfessor'
import SearchBar from '../CampoBusca';
import StyledLogo from '../HeroLogo'


export default function SearchAppBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <AcessoProfessor />
      </Box>

      <Box>
        <Link to={`/`}>
          <StyledLogo
            src="/imagens/LOGO.svg"
            alt="Logo do Blog da Turma"
          />
        </Link>
      </Box>

      <SearchBar
        value={searchTerm}
        onChange={handleSearchChange}
        onSubmit={handleSearchSubmit}
      />
    </Box>
  );
}
