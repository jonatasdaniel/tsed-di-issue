import BaseRepository from "@domain/shared/base.repository";
import { Language } from "./language.entity";

export default interface LanguageRepository extends BaseRepository<Language> {}

export const LanguageRepositoryKey: unique symbol =
  Symbol("LanguageRepository");
