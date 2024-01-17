"use client";
import * as React from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import IrregularVerbs from "@/components/IrregularVerbs/IrregularVerbs";

const GrammarTheme = () => {
  const params = useParams();

  return <>{params?.theme === "irregular-verbs" && <IrregularVerbs />}</>;
};

export default GrammarTheme;
