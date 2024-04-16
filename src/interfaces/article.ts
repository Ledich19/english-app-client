import { ArticleTypesEnum } from "./enums";

export interface IArticle {
  title: string;
  body: (IArticleTable | ISchema)[];
}

export interface ISchema {
  type: ArticleTypesEnum;
  title: string;
  schema: string[];
}

export interface IArticleTable {
  type: ArticleTypesEnum;
  title: string;
  columnNames: string[];
  rows: Array<Array<string | string[]>>;
}
