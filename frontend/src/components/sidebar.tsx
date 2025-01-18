"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Link } from "@tanstack/react-router";
import { Home, Users, PlusCircle, LogIn, LogOut } from "lucide-react";

export default function SideBar({
  isLoggedIn,
  setIsLoggedIn,
  children,
}: {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <SidebarTrigger defaultChecked />
      <SidebarMenuButton className="text-black" />
      <div className="flex">
        {/* Sidebar */}
        <SidebarTrigger defaultChecked />
        <Sidebar
          className="bg-gray-800 text-white flex-shrink-0"
          style={{ "--sidebar-width": "12rem" } as React.CSSProperties}
        >
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Admin</SidebarGroupLabel>
              <SidebarMenu>
                {/* Link: Home */}
                <SidebarMenuItem>
                  <Link
                    to="/Index"
                    className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded text-gray-300"
                  >
                    <Home className="w-4 h-4" />
                    <span>Home</span>
                  </Link>
                </SidebarMenuItem>

                {/* Link: Anställda */}
                <SidebarMenuItem>
                  <Link
                    to="/Employees/EmployeesRoute"
                    className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded text-gray-300"
                  >
                    <Users className="w-2 h-4" />
                    <span>Anställda</span>
                  </Link>
                </SidebarMenuItem>

                {/* Link: Lägg till Anställd */}
                <SidebarMenuItem>
                  <Link
                    to="/AddEmployee/AddEmployeeRoute"
                    className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded text-gray-300"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>Lägg till anställd</span>
                  </Link>
                </SidebarMenuItem>

                {/* Login/Logout Button */}
                <SidebarMenuItem>
                  <button
                    onClick={() => setIsLoggedIn((prev) => !prev)}
                    className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded text-gray-300"
                  >
                    {isLoggedIn ? (
                      <>
                        <LogOut className="w-4 h-4" />
                        <span>Logga ut</span>
                      </>
                    ) : (
                      <>
                        <LogIn className="w-4 h-4" />
                        <span>Logga in</span>
                      </>
                    )}
                  </button>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        {/* Main Content */}
      </div>
      <main className="flex-1 bg-gray-100 p-4 min-w-full">{children}</main>
    </SidebarProvider>
  );
}
