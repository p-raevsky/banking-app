import { Currencies } from "./settings";

export const getBalance = (currencyValue, accountsArray) => {
  if (!accountsArray.length) {
    return "0.00";
  }

  const [filteredAccount] = accountsArray.filter(
    ({ currency }) => currency === currencyValue
  );

  return `${
    Currencies[filteredAccount.currency.toUpperCase()].currencySign
  }${Number(filteredAccount.balance).toFixed(2)}`;
};
