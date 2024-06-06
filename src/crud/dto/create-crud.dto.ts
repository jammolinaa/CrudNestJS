import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateCrudDto {
    id:          number;
    @IsNotEmpty()
    Titulo:      string;
    @IsString()
    FirsName: string;
    @IsNotEmpty()
    LastName:         string;
    @IsEmail()
    Email:      string;

    isAction:      string;
}
