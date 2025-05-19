import React from 'react';
import styled from 'styled-components';
import {InputBase} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type SearchBarProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const IconWrapper = styled.div<{ hidden: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  padding: 1rem;
  
  display: flex;
  align-items: center;
  z-index: 1;
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 90%;
  margin: 2rem auto;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    margin-left: 1rem;
  }
`;

const StyledInput = styled(InputBase)`
  color: inherit;
  width: 100%;
  border: 1px solid var(--Gray-300);
  background-color: var(--White);
  border-radius: 0.5rem;

  .MuiInputBase-input {
    padding: 0.5rem 0.5rem 0.5rem calc(1em + 2rem);
    font-size: 1rem;
    transition: width 0.3s ease;

    &::placeholder {
      padding: 0 2rem;
    }

    @media (min-width: 600px) {
      width: 20ch;

      &:focus {
        width: 30ch;
      }
    }
  }
`;

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSubmit }) => {
  const isTyping = value.trim().length > 0;

  return (
    <SearchWrapper>
      <form onSubmit={onSubmit}>
        <IconWrapper hidden={isTyping}>
          <SearchIcon />
        </IconWrapper>
        <StyledInput
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          value={value}
          onChange={onChange}
        />
      </form>
    </SearchWrapper>
  );
};

export default SearchBar;
