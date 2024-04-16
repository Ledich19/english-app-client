"use client";
import * as React from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import IrregularVerbs from "@/components/IrregularVerbs/IrregularVerbs";
import Article from "@/components/article/Article";

const GrammarTheme = () => {
  const params = useParams();

  return (
    <>
      {params?.theme === "irregular-verbs" ? (
        <IrregularVerbs />
      ) : (
        <Article theme={params?.theme}/>
      )}
    </>
  );
};

export default GrammarTheme;
