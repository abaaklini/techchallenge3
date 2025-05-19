import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, Typography } from '@mui/material';

type CustomCardProps = {
  title: string;
  content: string;
};

const StyledCard = styled(Card)`
  max-width: 400px;
  margin: 2rem auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  &:hover {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  }
`;

const StyledTitle = styled(Typography)`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const CustomCard: React.FC<CustomCardProps> = ({ title, content }) => {
  return (
    <StyledCard>
      <CardContent>
        <StyledTitle>{title}</StyledTitle>
        <Typography variant="body2" color="textSecondary">
          {content}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default CustomCard;
