import { Button as MUIButton, ButtonProps } from "@mui/material";
import styled, { css } from "styled-components";

interface CustomButtonProps extends ButtonProps {
  variant?: "contained" | "outlined";
}

const Button = styled(MUIButton)<CustomButtonProps>`
  && {
    border-radius: 2rem;
    padding: 0.8rem 1.6rem;
    text-decoration: none;
    text-align: center;
    font-size: 0.875rem;
    font-style: normal;
    line-height: 1rem;
    font-family: var(--font-family);

    ${({ variant }) =>
      variant === "outlined"
        ? css`
            background-color: var(--White);
            color: var(--Green);
            border: 1px solid var(--Green);

            &:hover {
              background-color: #f4fdf6;
            }
          `
        : css`
            background-color: var(--Green);
            color: var(--White);
            border: none;

            &:hover {
              background-color: #218838;
            }
          `}
  }
`;

export default Button;
