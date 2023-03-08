export const baseUrl =
  process.env.NODE_ENV === "production"
    ? (process.env.API_URL as string)
    : "http://localhost:3000";
