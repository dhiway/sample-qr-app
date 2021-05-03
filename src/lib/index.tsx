import React from "react";
import { LocalTypeORM } from "./LocalTypeORM";
import { AppProvider } from "../providers/AppContext";

interface ProviderProps {}

const Providers: React.FC<ProviderProps> = (props) => {
  return (
    <AppProvider>
      <LocalTypeORM>{props.children}</LocalTypeORM>
    </AppProvider>
  );
};

export default Providers;
