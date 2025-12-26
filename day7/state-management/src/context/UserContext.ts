import { createContext } from "react";


interface UserContextType {
  name: string;
}




export const UserContext = createContext<UserContextType | null>(null);