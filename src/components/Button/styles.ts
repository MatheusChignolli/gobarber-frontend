import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  border-radius: 10px;
  border: 0;
  color: #312e38;
  font-weight: 500;
  padding: 0 16px;
  height: 56px;
  width: 100%;
  margin-top: 16px;
  transition: background 0.25s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
