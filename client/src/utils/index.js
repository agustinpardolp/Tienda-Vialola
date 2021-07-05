
export const actionTypesCreator = (key, baseAction) => ({
  [`${baseAction}`]: `${key}/${baseAction}`,
  [`${baseAction}_REQUEST`]: `${key}/${baseAction}_REQUEST`,
  [`${baseAction}_SUCCESS`]: `${key}/${baseAction}_SUCCESS`,
  [`${baseAction}_FAILURE`]: `${key}/${baseAction}_FAILURE`
});


export const transformResponse = (data) => {
  let dropdownList =
    data &&
    data.map((serie, index) => {
      console.log(serie)
      let option = {
        id: serie.id,
        key: index,
        text: serie.name,
        value: serie.name,
      };
      return option;
    });
  return dropdownList;
};

export const errorsFormHandler = (errors) => {
  return Object.entries(errors).length > 0;
};
