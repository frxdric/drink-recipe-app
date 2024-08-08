import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class RecipeService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createRecipeDto: CreateRecipeDto): import(".prisma/client").Prisma.Prisma__RecipeClient<{
        id: number;
        ingredient: string;
        quantity: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        ingredient: string;
        quantity: number;
    }[]>;
    findOne(id: number): string;
    update(id: number, updateRecipeDto: UpdateRecipeDto): string;
    remove(id: number): string;
}
