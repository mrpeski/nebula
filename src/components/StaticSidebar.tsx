import logo from "../assets/soar-task.svg";
import SideNav from "./SideNav";

function StaticSidebar() {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[250px] lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white pb-4">
        <div className="py-5 px-6 pl-12 ">
          <div className="flex h-[60px] gap-x-2.5 shrink-0 items-center">
            <img alt="Soar Task" src={logo} className="h-8 w-auto" />
            <h2 className="text-2xl font-extrabold text-[#343C6A]">
              Soar Task
            </h2>
          </div>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <SideNav />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default StaticSidebar;
