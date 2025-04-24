import {
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  CreditCardIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

import {
  Home,
  CreditCard,
  Econometrics1,
  EconomicInvestment,
  Loan,
  Transfer,
  User,
  Service,
  Settings,
} from "./components/soar-nav-icons/dist";

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
