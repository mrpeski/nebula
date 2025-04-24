import { Tab } from "@headlessui/react";
import { classNames } from "../navConfig";
import EditProfile from "./EditProfile";

export default function ProfileTab() {
  return (
    <Tab.Group>
      <Tab.List className="flex border-soar-gray-2 border-b-[1px]">
        <Tab
          className={({ selected }) =>
            classNames(
              "py-2.5 px-5 text-sm font-medium",
              "focus:outline-none",
              selected
                ? "border-b-3 border-soar-black"
                : "hover:bg-soar-gray/[0.12]",
            )
          }
        >
          Edit Profile
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames(
              "py-2.5 px-5 text-sm font-medium",
              "focus:outline-none",
              selected
                ? "border-b-3 border-soar-black"
                : "hover:bg-soar-gray/[0.12]",
            )
          }
        >
          Preferences
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames(
              "py-2.5 text-sm font-medium text-soar-light-blue",
              "focus:outline-none",
              selected
                ? "bg-soar-gray-3"
                : "hover:bg-white/[0.12] hover:text-white",
            )
          }
        >
          Security
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className="p-3 bg-white rounded-lg">
          <EditProfile />
        </Tab.Panel>
        <Tab.Panel className="p-3 bg-white rounded-lg">
          Content for Tab 2
        </Tab.Panel>
        <Tab.Panel className="p-3 bg-white rounded-lg">
          Content for Tab 3
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
