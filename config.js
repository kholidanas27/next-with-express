const apiUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api" // development api
    : "http://localhost:5000/api"; // production api

export { apiUrl };
