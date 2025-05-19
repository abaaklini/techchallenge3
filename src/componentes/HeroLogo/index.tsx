import styled from 'styled-components';

const StyledLogo = styled.img`
  width: 60%;
  display: block;
  margin: 2rem auto;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
    cursor: pointer;
  }
`;

export default StyledLogo;