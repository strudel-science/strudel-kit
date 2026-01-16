import { queryOptions } from "@tanstack/react-query";
import { client } from "./client";

export const getUsersOptions = () => queryOptions({
  queryKey: ['users'],
  queryFn: async () => {
    const { data } = await client.get('users');
    return data;
  },
});

export const getUserOptions = (userId: number) => queryOptions({
  queryKey: ['user', userId],
  queryFn: async () => {
    const { data } = await client.get(`users/${userId}`);
    return data;
  },
});

export const getCurrentUserOptions = () => queryOptions({
  queryKey: ['me'],
  queryFn: async () => {
    const { data } = await client.get('me');
    return data;
  },
});