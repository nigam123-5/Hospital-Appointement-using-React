import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "₹";
  const currencyFormat = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };
  const value = {
    doctors,currencySymbol
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
