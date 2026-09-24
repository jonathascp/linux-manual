import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 0.5px solid #ffffff;
  border-radius: 12px;
`;

export const Titulo = styled.h1`
  font-size: 12px;
  color: #d7d7d7;
  font-weight: 600;
`;

export const Categoria = styled.div`
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-right: 0.5px solid #5d5d5d;
  padding: 20px 0;
`;

export const CategoriaTitulo = styled.p`
  font-size: 20px;
  color: #ffffff;
  text-transform: uppercase;
`;

export const BotaoCategoria = styled.button`
  font-size: 15px;
  color: #ffffff;
  border: none;
  background: none;
  padding: 7px 12px;
  cursor: pointer;
`;

export const ManualSessao = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  padding: 0 20px;
`;

export const ManualInput = styled.input`
  width: 100%;
  border: 1px solid lightgray;
  padding: 5px;
  background: grey;
  outline: none;
  &::placeholder {
    color: lightgrey;
    font-size: 14px;
  }
`;

export const ManualCategoria = styled.p`
  color: #ffffff;
  font-size: 13px;
`;

export const ManualCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  overflow: hidden;
  overflow-y: scroll;
`;

export const ManualCardStyled = styled.div`
  width: 400px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 7px;
  border: 1px solid #ffffff;
  border-radius: 12px;
  padding: 10px;
`;

export const ManualNomeComando = styled.h4`
  color: #0066ff;
  font-size: 14px;
`;

export const ManualDescricao = styled.p`
  font-size: 13px;
  color: #c9c9c9;
`;

export const ManualComando = styled.p`
  color: #fff;
  background: black;
  border-radius: 12px;
  padding: 7px;
`;
