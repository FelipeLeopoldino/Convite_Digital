import { Convidado, Id } from "@/core";

export default function criarConvidadoVazio(): Partial<Convidado> {
  return {
    id: Id.novo(),
    nome: "",
    email: "",
    confirmado: false,
    possuiAcompanhantes: false,
    qtdeAcompanhantes: 0,
  };
}
