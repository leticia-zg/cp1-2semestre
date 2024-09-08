import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  color: #d3d3d3; 
  margin-bottom: 8px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #808080; 
  margin-right: 10px; 
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ItemList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center; 
  padding: 10px 0;
  font-size: 1.2rem;
  color: #333;
  border-bottom: 1px solid #ccc; 
`;
