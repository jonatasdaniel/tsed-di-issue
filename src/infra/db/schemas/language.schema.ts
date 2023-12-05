import { Language } from "@domain/language/language.entity";
import { EntitySchema } from "typeorm";

export const LanguageEntitySchema = new EntitySchema<Language>({
  name: "Language",
  tableName: "languages",
  columns: {
    id: {
      primary: true,
      generated: "uuid",
      type: "uuid",
    },
    name: {
      type: "varchar",
      nullable: false,
    },
  },
  uniques: [
    {
      name: "unique_name",
      columns: ["name"],
    },
  ],
});
