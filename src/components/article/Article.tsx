"use client";
import { grammar } from "@/app/data/grammar";
import { Typography } from "@mui/material";
import * as React from "react";

interface IProps {
  theme: string | string[] | undefined;
}

const Article = ({ theme }: IProps) => {
  const article = grammar.find(
    (item) => item.title.replaceAll(" ", "-") === theme
  );

  return (
    <>
      <Typography>{article?.title}</Typography>
      {theme}
      ======================== ======================= =======================
    </>
  );
};

export default Article;
