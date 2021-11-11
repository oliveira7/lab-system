import { IsBoolean, IsString } from "class-validator";

export class CreateLaboratory {
  @IsString()
  readonly name: string;
  
  @IsString()
  readonly address: string;

  @IsBoolean()
  readonly status: boolean;
}