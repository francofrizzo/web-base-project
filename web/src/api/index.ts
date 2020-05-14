import apiClient from "./client";

export async function test(): Promise<void> {
  const { data } = await apiClient.get("/");
};
