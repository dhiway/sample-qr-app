import React, { useEffect, useContext, createContext } from "react";
import {} from "react-navigation";
import { initDhiwayDB } from "./datastore";

export const LocalDBContext = createContext<any>({});

interface Props {}

export const LocalTypeORM: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    async function dbInit() {
      await initDhiwayDB();
    }
    dbInit();
  }, []);

  return <LocalDBContext.Provider>{children}</LocalDBContext.Provider>;
};
