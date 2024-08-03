import { ApiProperty } from "@nestjs/swagger";

export class CreateRecipeDto {
    @ApiProperty()
    ingredient: string;
    @ApiProperty()
    quantity: number;
}

