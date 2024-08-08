import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
export declare class RecipeController {
    private readonly recipeService;
    constructor(recipeService: RecipeService);
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
    findOne(id: string): string;
    update(id: string, updateRecipeDto: UpdateRecipeDto): string;
    remove(id: string): string;
}
