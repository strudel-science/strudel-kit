import { queryOptions } from "@tanstack/react-query";
import { client } from "./client";
import { User } from "./types";

export const getUsersOptions = () => queryOptions({
  queryKey: ['users'],
  queryFn: async () => {
    const { data } = await client.get<User[]>('users');
    return data;
  },
});

export const getUserOptions = (userId: number) => queryOptions({
  queryKey: ['user', userId],
  queryFn: async () => {
    const { data } = await client.get<User>(`users/${userId}`);
    return data;
  },
});

export const getCurrentUserOptions = () => queryOptions({
  queryKey: ['me'],
  queryFn: async () => {
    const { data } = await client.get<User>('me');
    return data;
  },
});