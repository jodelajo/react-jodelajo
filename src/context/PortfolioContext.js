import React, { createContext, useEffect, useState } from "react";
import { portfolio } from "../data/portfolio";
import stringToSlug from "../helpers/stringToSlug";

export const PortfolioContext = createContext({});

export default function PortfolioContextProvider({ children }) {
  const [portData, setData] = useState();
  let currentId = 1;
  const contextData = portfolio.map((port) => ({
    ...port,
    id: currentId++,
    slug: stringToSlug(port.title),
  }));

  useEffect(() => {
    setData(contextData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = {
    portData,
  };
  return (
    <PortfolioContext.Provider value={data}>
      {children}
    </PortfolioContext.Provider>
  );
}
