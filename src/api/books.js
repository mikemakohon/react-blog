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
