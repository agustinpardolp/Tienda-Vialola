export const handleBreadcrum = (categoryPath, serie, seriePath) => {
  let breadcrumItems = [
    { name: "GALLERY", path: categoryPath, status: true },
    { name: "SERIES", path: seriePath, status: true },
    { name: serie, path: "", status: true },
  ];

  return breadcrumItems;
};
