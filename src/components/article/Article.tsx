"use client";
import { grammar } from "@/app/data/grammar";
import { Typography } from "@mui/material";
import * as React from "react";
import Schema from "./Schema";
import { ArticleTypesEnum } from "@/interfaces/enums";
import { IArticleTable, ISchema } from "@/interfaces/article";
import ArticleTable from "./ArticleTable";

interface IProps {
  theme: string | string[] | undefined;
}

const Article = ({ theme }: IProps) => {
  const article = grammar.find(
    (item) => item.title.replaceAll(" ", "-") === theme
  );

  return (
    <>
      <Typography variant="h3">{article?.title}</Typography>
  
  
      {article?.body.map((item, i) => {
        if (item.type === ArticleTypesEnum.schema) {
          return <Schema key={i} schema={item as ISchema} />;
        }
        if (item.type === ArticleTypesEnum.table) {
          return <ArticleTable key={i} table={item as IArticleTable} />;
        }
      })}
    </>
  );
};

export default Article;
