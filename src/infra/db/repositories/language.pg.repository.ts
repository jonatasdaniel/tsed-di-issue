import { PostgresDataSource } from "./../data-source/PostgresDatasource";
import LanguageRepository, {
  LanguageRepositoryKey,
} from "@domain/language/language.repository";
import { Inject, Injectable } from "@tsed/di";
import { POSTGRES_DATA_SOURCE } from "../data-source/PostgresDatasource";
import { Language } from "@domain/language/language.entity";
import { LanguageEntitySchema } from "../schemas/language.schema";

@Injectable({ provide: LanguageRepositoryKey })
export default class LanguagePgRepository implements LanguageRepository {
  private repository;

  constructor(
    @Inject(POSTGRES_DATA_SOURCE) dataSource: typeof PostgresDataSource
  ) {
    this.repository = dataSource.getRepository<Language>(LanguageEntitySchema);
  }

  findAll(): Promise<Language[]> {
    return this.repository.find();
  }
  findById(id: string): Promise<Language | null> {
    return this.repository.findOneBy({ id });
  }
}
