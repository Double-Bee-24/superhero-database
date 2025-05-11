export interface IPaginationProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}
