import { Inject } from "@tsed/di";
import { Language } from "./language.entity";
import LanguageRepository, {
  LanguageRepositoryKey,
} from "./language.repository";

export default class LanguageService {
  constructor(
    @Inject(LanguageRepositoryKey)
    private readonly repository: LanguageRepository
  ) {}

  async findAll(): Promise<Language[]> {
    return this.repository.findAll();
  }
}
