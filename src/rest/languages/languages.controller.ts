import LanguageService from "@domain/language/language.service";
import { Controller } from "@tsed/di";
import { plainToInstance } from "class-transformer";
import LanguageDto from "./dtos/language.dto";
import { Get } from "@tsed/schema";

@Controller("/v1/languages")
export class LanguagesController {
  constructor(private readonly languageService: LanguageService) {}

  @Get("/")
  async findAll() {
    const data = await this.languageService.findAll();
    return { data: data.map((d) => plainToInstance(LanguageDto, d)) };
  }
}
