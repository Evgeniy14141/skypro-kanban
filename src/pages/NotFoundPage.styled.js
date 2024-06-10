import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled components
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
  color: #333;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 0.5em;
`;

export const Description = styled.p`
  font-size: 1.5em;
  margin-bottom: 1em;
`;

export const HomeButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;