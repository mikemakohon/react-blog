// export const usePagination = ({
//   totalCount,
//   pageSize,
//   currentPage,
//   siblingCount = 1,
// }) => {
//   const range = (start, end) => {
//     const length = end - start + 1;

//     return Array.from({ length }, (_, idx) => idx + start);
//   };

//   const paginationRange = useMemo(() => {
//     const totalPageCount = Math.ceil(totalCount / pageSize);
//     const totalPageNumbers = siblingCount + 5;

//     // Case 1
//     if (totalPageNumbers >= totalPageCount) {
//       return range(1, totalPageCount);
//     }

//     const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
//     const rightSiblingIndex = Math.min(currentPage + siblingCount, totalCount);

//     const shouldShowLeftDots = leftSiblingIndex > 2;
//     const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

//     // Case 2
//     if (!shouldShowLeftDots && shouldShowRightDots) {
//       let leftItemCount = 3 + 2 * siblingCount;
//       let leftRange = range(1, leftItemCount);

//       return [...leftRange, DOTS, totalPageCount];
//     }
//   }, [totalCount, pageSize, currentPage, siblingCount]);

//   return paginationRange;
// };
