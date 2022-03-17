import { CategoriesRepository } from "../../cars/repositories/implementations/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Categoria já existente!");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };

// -7:33
