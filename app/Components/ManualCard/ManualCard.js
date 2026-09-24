import {
  ManualCardStyled,
  ManualComando,
  ManualDescricao,
  ManualNomeComando,
} from "../Painel/Painel.styled";

export default function ManualCard({ nome, descricao, comando }) {
  return (
    <>
      <ManualCardStyled>
        <ManualNomeComando>{nome}</ManualNomeComando>
        <ManualDescricao>{descricao}</ManualDescricao>
        <ManualComando>{comando}</ManualComando>
      </ManualCardStyled>
    </>
  );
}
