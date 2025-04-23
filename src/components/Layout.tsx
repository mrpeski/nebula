import { SidebarProvider } from "./SidebarContext";
import { Menu, MenuButton } from "@headlessui/react";
import { BellIcon, CogIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import StaticSidebar from "./StaticSidebar";
import DynamicSidebar from "./DynamicSidebar";
import SidebarToggle from "./SidebarToggle";
import userAvatar from "../assets/user.png";
import PageTitle from "../components/PageTitle";

interface Props {
  title: string;
  children: React.ReactNode;
}
export default function Layout(props: Props) {
  return (
    <SidebarProvider>
      <div>
        <DynamicSidebar />
        <StaticSidebar />

        <div className="lg:pl-[250px]">
          <div className="border-gray-200 sm:border-b lg:mx-auto lg:max-w-7xl lg:px-8">
            <div className="flex py-5 items-center gap-x-4  bg-white px-4 sm:gap-x-6 sm:px-6 lg:px-0">
              <SidebarToggle />
              <div className="flex flex-1 gap-x-4 justify-between items-center lg:gap-x-6">
                <div className="flex-1 text-center sm:text-left">
                  <PageTitle title={props.title} />
                </div>
                <form
                  action="#"
                  method="GET"
                  className="hidden sm:grid grid-cols-1 bg-gray-200"
                >
                  <input
                    name="search"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    className="col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-hidden placeholder:text-gray-400 sm:text-sm/6"
                  />
                  <MagnifyingGlassIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"
                  />
                </form>

                <div className="flex items-center gap-x-4 lg:gap-x-6">
                  <button
                    type="button"
                    className="hidden sm:inline-block -m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Settings</span>
                    <CogIcon aria-hidden="true" className="size-6" />
                  </button>
                  <button
                    type="button"
                    className=" hidden sm:inline-block -m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="size-6" />
                  </button>
                  {/* Separator */}
                  <div
                    aria-hidden="true"
                    className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
                  />

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative">
                    <MenuButton className="-m-1.5 flex items-center p-1.5">
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src={userAvatar}
                        className="size-[35px] sm:size-[60px] rounded-full bg-gray-50"
                      />
                    </MenuButton>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:hidden items-center justify-center p-4">
            <form
              action="#"
              method="GET"
              className="grid grid-cols-1 bg-gray-200"
            >
              <input
                name="search"
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-hidden placeholder:text-gray-400 sm:text-sm/6"
              />
              <MagnifyingGlassIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"
              />
            </form>
          </div>
          <main className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {props.children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
