import { Guid } from 'guid-typescript';

export interface produtos {
    id: Guid
    setor: string

    nome: string
    valor: string
    tipo: string
}