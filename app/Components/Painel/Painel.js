"use client";
import { useState } from "react";
import comandosArr from "../../../public/commands.json";
import {
  Container,
  Titulo,
  Categoria,
  BotaoCategoria,
  CategoriaTitulo,
  ManualSessao,
  ManualInput,
  ManualCategoria,
  ManualCardContainer,
} from "./Painel.styled";
import ManualCard from "../ManualCard/ManualCard";

export default function Painel() {
  const [categoria, setCategoria] = useState("");
  const quantidadeDeComandos = comandosArr.filter(
    (arr) => arr.categoria === categoria,
  );
  const categoriaArr = comandosArr.filter(
    (elemento) => elemento.categoria === categoria,
  );

  return (
    <Container>
      <Categoria>
        <Titulo>Manual Linux</Titulo>
        <CategoriaTitulo>categoria</CategoriaTitulo>
        <ul>
          <li>
            <BotaoCategoria
              onClick={(e) => {
                setCategoria(e.target.value);
              }}
              value={"navegacao"}
            >
              Navegação
            </BotaoCategoria>
          </li>
          <li>
            <BotaoCategoria
              onClick={(e) => {
                setCategoria(e.target.value);
              }}
              value={"arquivos"}
            >
              Arquivos
            </BotaoCategoria>
          </li>
          <li>
            <BotaoCategoria
              onClick={(e) => {
                setCategoria(e.target.value);
              }}
              value={"sistema"}
            >
              Sistema
            </BotaoCategoria>
          </li>
          <li>
            <BotaoCategoria
              onClick={(e) => {
                setCategoria(e.target.value);
              }}
              value={"pacotes"}
            >
              Pacotes
            </BotaoCategoria>
          </li>
          <li>
            <BotaoCategoria
              onClick={(e) => {
                setCategoria(e.target.value);
              }}
              value={"atalhos"}
            >
              Atalhos-terminal
            </BotaoCategoria>
          </li>
          <li>
            <BotaoCategoria
              onClick={(e) => {
                setCategoria(e.target.value);
              }}
              value={"hardware"}
            >
              Hardware
            </BotaoCategoria>
          </li>
          <li>
            <BotaoCategoria
              onClick={(e) => {
                setCategoria(e.target.value);
              }}
              value={"rede"}
            >
              Rede
            </BotaoCategoria>
          </li>
          <li>
            <BotaoCategoria
              onClick={(e) => {
                setCategoria(e.target.value);
              }}
              value={"wildcards"}
            >
              Wildcards
            </BotaoCategoria>
          </li>
        </ul>
      </Categoria>
      <ManualSessao className="manualSessao">
        <ManualInput placeholder="Busque um comando" />
        <ManualCategoria>
          Categoria {categoria} {quantidadeDeComandos.length}
        </ManualCategoria>
        <ManualCardContainer>
          {categoriaArr.length === 0 ? (
            <p style={{ color: "red", fontSize: "2rem" }}>Sem comando ainda.</p>
          ) : (
            categoriaArr.map((elemento) => (
              <ManualCard
                key={elemento.id}
                nome={elemento.comando}
                descricao={elemento.descricao}
                comando={elemento.exemplo}
              />
            ))
          )}
        </ManualCardContainer>
      </ManualSessao>
    </Container>
  );
}
