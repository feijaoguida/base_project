import { Status } from "@prisma/client"
import { IsEnum, IsString } from "class-validator"

export class CreateCompanyDto {
    @IsString()
    name: string

    @IsString()
    cnpj_cpf: string
}


