import client from "./client";

/**
 * All data request
 * @returns either an array of objects if succeeded, or an error otherwise
 */
export const getBooks = async () => {
  try {
    const books = await client.get("/Books");
    return books;
  } catch (error) {
    return Promise.reject(error.title);
  }
};

/**
 * Specific data request
 * @param {number} id - The id of the requested item
 * @returns either an item object if succeeded, or an error otherwise
 */
export const getBook = async (id) => {
  try {
    const book = await client.get(`/Books/${id}`);
    return book;
  } catch (error) {
    return Promise.reject(error.title);
  }
};

/**
 * Creates a new item
 * @param {object} data - Item description
 * @returns either a newly created item object if succeeded, or an error otherwise
 */
export const createBook = async (data) => {
  try {
    return await client.post("/Books", { ...data });
  } catch (error) {
    return Promise.reject(error.title);
  }
};

/**
 * Updates a specific item
 * @param {*} data - Item description
 * @param {*} id - Item id
 * @returns either an updated item object if succeeded, or an error otherwise
 */
export const updateBook = async (data, id) => {
  try {
    return await client.patch(`/Books/${id}`, { ...data });
  } catch (error) {
    return Promise.reject(error.title);
  }
};

/**
 * Deletes a specific item
 * @param {*} id - Item id
 * @returns either a deleted item object if succeeded, or an error otherwise
 */
export const deleteBook = async (id) => {
  try {
    return await client.delete(`/Books/${id}`);
  } catch (error) {
    return Promise.reject(error.title);
  }
};
