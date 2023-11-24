import axios from "../config/axios";

export const fetchManga = async (page = 1, genres) => {
  let data, err;

  try {
    const response = await axios.get("/fetch", {
      params: {
        page: page,
        genres: genres,
      },
    });
    data = response.data;
  } catch (error) {
    err = error;
  }

  return { data, err };
};

export const fetchLatestManga = async (page = 1, genres) => {
  let data, err;

  try {
    const response = await axios.get("/latest", {
      params: {
        page: page,
        genres: genres,
      },
    });
    data = response.data;
  } catch (error) {
    err = error;
  }

  return { data, err };
};

export const searchManga = async (text) => {
  let data, err;

  try {
    const response = await axios.get("/search", {
      params: {
        text,
      },
    });
    data = response.data;
  } catch (error) {
    err = error;
  }

  return { data, err };
};
