export const formatFieldName = (field: string): string => {
  return field.replace("_", " ").replace(/\b\w/g, (c) => c.toUpperCase());
};
