interface IIrregularVerbs {
  group: string;
  infinitive: {
    word: string;
    transcription: string;
  };
  pastSimple: {
    word: string;
    transcription: string;
  };
  pastParticiple: {
    word: string;
    transcription: string;
  };
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
