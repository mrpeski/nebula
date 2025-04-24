import Home from "./components/soar-nav-icons/dist/Home";
import CreditCard from "./components/soar-nav-icons/dist/CreditCard";
import Econometrics1 from "./components/soar-nav-icons/dist/Econometrics1";
import EconomicInvestment from "./components/soar-nav-icons/dist/EconomicInvestment";
import Loan from "./components/soar-nav-icons/dist/Loan";
import Transfer from "./components/soar-nav-icons/dist/Transfer";
import User from "./components/soar-nav-icons/dist/User";
import Service from "./components/soar-nav-icons/dist/Service";
import Settings from "./components/soar-nav-icons/dist/Settings";

export const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  {
    name: "Transactions",
    href: "/transactions",
    icon: Transfer,
  },
  { name: "Accounts", href: "/accounts", icon: User },
  {
    name: "Investments",
    href: "/investments",
    icon: EconomicInvestment,
  },
  {
    name: "Credit Cards",
    href: "/credit-cards",
    icon: CreditCard,
  },
  { name: "Loans", href: "/loans", icon: Loan },
  { name: "Services", href: "/services", icon: Service },
  {
    name: "My Privileges",
    href: "/my-privileges",
    icon: Econometrics1,
  },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
