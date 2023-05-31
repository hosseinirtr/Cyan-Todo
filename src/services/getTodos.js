import apiClient from "./defaultService";

export const getTodos = () => {
  return apiClient
    .get(`todos`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
