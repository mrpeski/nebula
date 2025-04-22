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

export const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: true },
  {
    name: "Transactions",
    href: "/transactions",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  { name: "Accounts", href: "/accounts", icon: UsersIcon, current: false },
  {
    name: "Investments",
    href: "/investments",
    icon: ChartPieIcon,
    current: false,
  },
  {
    name: "Credit Cards",
    href: "/credit-cards",
    icon: CreditCardIcon,
    current: false,
  },
  { name: "Loans", href: "/loans", icon: FolderIcon, current: false },
  { name: "Services", href: "/services", icon: Cog6ToothIcon, current: false },
  {
    name: "My Privileges",
    href: "/my-privileges",
    icon: ShieldCheckIcon,
    current: false,
  },
  { name: "Settings", href: "/settings", icon: Cog6ToothIcon, current: false },
];

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
