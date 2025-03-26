import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Icon from "../components/Icons/Icon";
import { SidebarProps } from "../types/type";



function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  variant = "default",
}: SidebarProps) {

  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLDivElement>(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div className="min-w-fit">
      <div
        className={`fixed inset-0 bg-gray-900/30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        aria-hidden="true"
      ></div>

      <div
        id="sidebar"
        ref={sidebar}
        className={`flex lg:flex! flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:w-64! shrink-0 bg-white dark:bg-gray-800 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-64"
          } ${variant === "v2"
            ? "border-r border-gray-200 dark:border-gray-700/60"
            : "rounded-r-2xl shadow-xs"
          }`}
      >
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <Icon
              name="close"
              className="w-6 h-6 fill-current"
              width={24}
              height={24}
            />

          </button>
          <NavLink end to="/" className="block">
            <Icon
              name="logo"
              className="fill-[#16C47F]"
              width={42}
              height={42}
            />
          </NavLink>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xs uppercase text-gray-400 dark:text-gray-500 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
            </h3>
            <ul className="mt-3 space-y-1">
              <React.Fragment>
                <li className="group">
                  <a
                    href="#0"
                    className="block text-gray-800 dark:text-gray-100 truncate transition duration-150 bg-[#16C47F]/10 dark:bg-[#16C47F]/20 rounded-md px-3 py-2.5"
                    onClick={(e) => {
                      e.preventDefault();
                      setSidebarExpanded(true);
                    }}
                  >
                    <div className="flex items-center">
                      <Icon
                        name="dashboard"
                        className="shrink-0 fill-current text-[#16C47F] dark:text-[#16C47F]"
                      />
                      <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-[#16C47F] dark:text-[#16C47F]">
                        Dashboard
                      </span>
                    </div>
                  </a>
                </li>
              </React.Fragment>


              <React.Fragment>
                <li className="group">
                  <a
                    href="#0"
                    className="block text-gray-800 dark:text-gray-100 truncate transition duration-150 group-hover:bg-[#16C47F]/10 dark:group-hover:bg-[#16C47F]/20 rounded-md px-3 py-2.5"
                    onClick={(e) => {
                      e.preventDefault();
                      setSidebarExpanded(true);
                    }}
                  >
                    <div className="flex items-center">
                      <Icon
                        name="analytics"
                        className="shrink-0 fill-current text-gray-400 dark:text-gray-500 group-hover:text-[#16C47F] dark:group-hover:text-[#16C47F]"
                      />
                      <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 group-hover:text-[#16C47F] dark:group-hover:text-[#16C47F]">
                        Analytics
                      </span>
                    </div>
                  </a>
                </li>
              </React.Fragment>
              <React.Fragment>
                <li className="group">
                  <a
                    href="#0"
                    className="block text-gray-800 dark:text-gray-100 truncate transition duration-150 group-hover:bg-[#16C47F]/10 dark:group-hover:bg-[#16C47F]/20 rounded-md px-3 py-2.5"
                    onClick={(e) => {
                      e.preventDefault();
                      setSidebarExpanded(true);
                    }}
                  >
                    <div className="flex items-center">
                      <Icon
                        name="notifications"
                        className="shrink-0 fill-current text-gray-400 dark:text-gray-500 group-hover:text-[#16C47F] dark:group-hover:text-[#16C47F]"
                      />
                      <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 group-hover:text-[#16C47F] dark:group-hover:text-[#16C47F]">
                        Notifications
                      </span>
                    </div>
                  </a>
                </li>
              </React.Fragment>
              <React.Fragment>
                <li className="group">
                  <a
                    href="#0"
                    className="block text-gray-800 dark:text-gray-100 truncate transition duration-150 group-hover:bg-[#16C47F]/10 dark:group-hover:bg-[#16C47F]/20 rounded-md px-3 py-2.5"
                    onClick={(e) => {
                      e.preventDefault();
                      setSidebarExpanded(true);
                    }}
                  >
                    <div className="flex items-center">
                      <Icon
                        name="reports"
                        className="shrink-0 fill-current text-gray-400 dark:text-gray-500 group-hover:text-[#16C47F] dark:group-hover:text-[#16C47F]"
                      />
                      <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 group-hover:text-[#16C47F] dark:group-hover:text-[#16C47F]">
                        Reports
                      </span>
                    </div>
                  </a>
                </li>
              </React.Fragment>

              <React.Fragment>
                <li className="group">
                  <a
                    href="#0"
                    className="block text-gray-800 dark:text-gray-100 truncate transition duration-150 group-hover:bg-[#16C47F]/10 dark:group-hover:bg-[#16C47F]/20 rounded-md px-3 py-2.5"
                    onClick={(e) => {
                      e.preventDefault();
                      setSidebarExpanded(true);
                    }}
                  >
                    <div className="flex items-center">
                      <Icon
                        name="settings"
                        className="shrink-0 fill-current text-gray-400 dark:text-gray-500 group-hover:text-[#16C47F] dark:group-hover:text-[#16C47F]"
                      />
                      <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 group-hover:text-[#16C47F] dark:group-hover:text-[#16C47F]">
                        Settings
                      </span>
                    </div>
                  </a>
                </li>
              </React.Fragment>
            </ul>
          </div>
        </div>

        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="w-12 pl-4 pr-3 py-2">
            <button
              className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
              onClick={() => setSidebarExpanded(!sidebarExpanded)}
            >
              <span className="sr-only">Expand / collapse sidebar</span>
              <Icon
                name="expandCollapse"
                className="shrink-0 fill-current text-gray-400 dark:text-gray-500 sidebar-expanded:rotate-180"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;