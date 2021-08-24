import { Colors } from "./const";

export const ApiSettings = {
  BACKEND_URL: "https://vhmfz744o2.execute-api.eu-west-2.amazonaws.com/dev",
  REQUEST_TIMEOUT: 5000,
  KEY_VALUE: "ieLWvByj0Z7obl0aLmVzmiJgbjVXZf987aoRts59",
};

export const NavItems = {
  HOME: {
    name: "Home",
    path: "/",
    className: "link_home",
    svgId: "home",
  },
  SEND: {
    name: "Send Money",
    path: "/send",
    className: "link_send",
    svgId: "send",
  },
  TOP_UP: {
    name: "Top Up",
    path: "#",
    className: "link_top_up",
    svgId: "piggy_bank_solid",
  },
  ACCOUNTS: {
    name: "Accounts",
    path: "#",
    className: "link_accounts",
    svgId: "wallet",
  },
};

export const Currencies = {
  EUR: {
    name: "eur",
    fullName: "Euro",
    styleFill: Colors.BLUE,
    currencySign: "€",
  },
  GBP: {
    name: "gbp",
    fullName: "British Sterling",
    styleFill: Colors.ROSE,
    currencySign: "£",
  },
  USD: {
    name: "usd",
    fullName: "US Dollar",
    styleFill: Colors.ORANGE,
    currencySign: "$",
  },
  KRW: {
    name: "krw",
    fullName: "South Korea Won",
    styleFill: Colors.YELLOW,
    currencySign: "₩",
  },
};
