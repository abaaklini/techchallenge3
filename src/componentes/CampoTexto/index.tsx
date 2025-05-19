import { TextField as MUITextField } from '@mui/material';
import styled from 'styled-components';

const TextField = styled(MUITextField)`
  && {
    display: flex;
    padding: 0.5rem;
    align-items: top;
    flex: 1 0 0;

    border-radius: 0.5rem;
    border: 1px solid var(--Gray-300);
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

    .MuiOutlinedInput-root {
      padding: 0;
      border: none;

      fieldset {
        border: none;
      }

      input {
        padding: 0;
        font-family: var(--font-family);
        font-size: 1rem;
        color: var(--Gray-500);
        font-weight: 400;
      }
    }

    .MuiInputLabel-root {
      color: var(--Gray-500);
      font-size: 0.8rem;
      background-color: var(--White);
      top: -15%;

      &.Mui-focused {
        color: var(--Primary-500);
        background-color: var(--White);
        font-size: 1rem;
        top: 0%;
      }

      &.Mui-error {
        color: var(--Red);
      }
    }
  }
`;

export default TextField;
