import client from "./client";

export const getBooks = async () => {
  try {
    const books = await client.get("/Books");
    return books;
  } catch (error) {
    return Promise.reject(error.title);
  }
};

export const getBook = async (id) => {
  try {
    const book = await client.get(`/Books/${id}`);
    return book;
  } catch (error) {
    return Promise.reject(error.title);
  }
};

export const createBook = async (data) => {
  try {
    return await client.post("/Books", { ...data });
  } catch (error) {
    return Promise.reject(error.title);
  }
};

export const updateBook = async (data, id) => {
  try {
    return await client.patch(`/Books/${id}`, { ...data });
  } catch (error) {
    return Promise.reject(error.title);
  }
};

export const deleteBook = async (id) => {
  try {
    return await client.delete(`/Books/${id}`);
  } catch (error) {
    return Promise.reject(error.title);
  }
};
