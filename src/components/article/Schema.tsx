"use client";
import { grammar } from "@/app/data/grammar";
import { ISchema } from "@/interfaces/article";
import { Typography } from "@mui/material";
import * as React from "react";

interface IProps {
  schema: ISchema;
}

const Schema = ({ schema }: IProps) => {
  return (
    <>
    <Typography variant="h4">{schema.title}</Typography>
    {console.log(schema)}
      {schema.schema.map((item) => (
        <Typography key={item} sx={{ ml: 2 }}>{item}</Typography>
      ))}
    </>
  );
};

export default Schema;
