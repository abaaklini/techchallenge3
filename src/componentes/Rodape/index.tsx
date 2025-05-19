import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  width: 100%;
  height: 8.875rem;
  padding: 4rem 2rem;
  flex-direction: column;
  align-items: center;

  background: var(--Primary-500);
  text-align: center;

  p {
    margin: 0;
    font-size: 1rem;
    color: var(--White);
  }
`;

const Rodape: React.FC = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2025 Blog da Turma. Todos os direitos reservados.</p>
    </FooterWrapper>
  );
};

export default Rodape;