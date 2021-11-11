import { IsArray, IsBoolean, IsEnum, IsString } from 'class-validator';

export enum type {
  CLINIC = 'analise clinica',
  IMAGE = 'imagem',
}

export class CreateExam {
  @IsArray()
  readonly laboratoriesIds: [];

  @IsString()
  readonly name: string;

  @IsEnum({
    CLINIC: 'analise clinica',
    IMAGE: 'imagem',
  })
  readonly type: type;

  @IsBoolean()
  readonly active: boolean;
}
