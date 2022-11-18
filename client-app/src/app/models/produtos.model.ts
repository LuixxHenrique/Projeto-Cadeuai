import { Guid } from 'guid-typescript';

export interface produtos {
    id: Guid
    setor: Guid

    nome: string
    valor: string
}