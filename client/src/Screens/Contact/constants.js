export const BACKGROUND_IMAGES = {
  CONTACT: "contact",
};

export const optionsHandler = (intl) => {
  const selectOptions = [
    {
      key: "1",
      text: intl.formatMessage({ id: "contact.selectIlustration" }),
      value: "ilustration",
    },
    {
      key: "2",
      text: intl.formatMessage({ id: "contact.selectExpositions" }),
      value: "expositions",
    },
    {
      key: "3",
      text: intl.formatMessage({ id: "contact.selectBuyArtwork" }),
      value: "buyArtwork",
    },
    {
      key: "4",
      text: intl.formatMessage({ id: "contact.selectOther" }),
      value: "other",
    },
  ];
  return selectOptions;
};

