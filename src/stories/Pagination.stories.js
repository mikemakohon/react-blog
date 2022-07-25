import Pagination from "../components/Pagination/Pagination";
import "bootstrap/dist/css/bootstrap.css";

export default {
  title: "Pagination",
  component: Pagination,
};

export const defaultPagination = () => (
  <Pagination
    currentPage={1}
    itemsPerPage={6}
    totalItems={50}
    paginate={() => {}}
  />
);
