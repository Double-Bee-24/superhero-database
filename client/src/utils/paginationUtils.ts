export const getPrevPage = (currentPage: number): number => {
  return Math.max(currentPage - 1, 1);
};

export const getNextPage = (
  currentPage: number,
  totalPages: number
): number => {
  return Math.min(currentPage + 1, totalPages);
};
