
export const actionTypesCreator = (key, baseAction) => ({
  [`${baseAction}`]: `${key}/${baseAction}`,
  [`${baseAction}_REQUEST`]: `${key}/${baseAction}_REQUEST`,
  [`${baseAction}_SUCCESS`]: `${key}/${baseAction}_SUCCESS`,
  [`${baseAction}_FAILURE`]: `${key}/${baseAction}_FAILURE`
});