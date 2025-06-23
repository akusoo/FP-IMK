import useSWR from "swr";
import { getUsers } from "@/services/user.service";
import { User } from "@/types/user";

export default function useUsers() {
  const { data, error, isLoading } = useSWR<User[]>("users", getUsers);
  return {
    users: data,
    error,
    isLoading,
  };
}
