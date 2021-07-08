import { SearchCategory } from "semantic-ui-react";

export const handleBreadcrum = (category, categoryPath, serie, seriePath) => {
  let breadcrumItems = [
    { name: category, path: categoryPath },
    { name: "SERIES", path: "" },
    { name: serie, path: seriePath },
  ];

  return breadcrumItems;
};
