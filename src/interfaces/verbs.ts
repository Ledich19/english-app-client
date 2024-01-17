interface  IFormVerb  {
  word: string;
  transcription: string;
}

interface IIrregularVerbs {
  group: string;
  infinitive: IFormVerb;
  pastSimple: IFormVerb;
  pastParticiple: IFormVerb;
  translations: {
    ua: string;
    ru: string;
  };
  image: {
    url: string;
  };
  frequencyOfUse: string;

 // frequencyOfUse: "high" | "average" | "rare";
}
