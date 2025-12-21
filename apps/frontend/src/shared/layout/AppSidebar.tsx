import * as React from "react";
import {
  LayoutDashboard,
  Database,
  UploadCloud,
  Layers,
  ChevronRight,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function AppSidebar({ activeTab, onTabChange }: AppSidebarProps) {
  const items = [
    {
      title: "Consultar Matriz",
      tab: "Consultar",
      icon: LayoutDashboard,
      description: "Vista de puertos en tiempo real",
    },
    {
      title: "Gestionar OLT",
      tab: "Editar",
      icon: Database,
      description: "Edición de inventario y estados",
    },
    {
      title: "Carga Masiva",
      tab: "Cargar",
      icon: UploadCloud,
      description: "Importación de datos externos",
    },
  ];

  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-black/5 bg-brand-purple text-white w-56 sm:w-64 md:w-[17.5rem] z-30 transition-all duration-300 ease-in-out"
    >
      {/* Header — Responsive & Collapsible Safe */}
      <SidebarHeader className="h-16 md:h-[4.5rem] flex flex-col justify-center border-b border-white/5 bg-brand-purple p-0 overflow-hidden relative shrink-0">
        <div className="flex items-center w-full px-4 group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:justify-center transition-all duration-300">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-green transition-all duration-300 ring-1 ring-white/10 shadow-inner group-data-[collapsible=icon]:h-8 group-data-[collapsible=icon]:w-8 group-data-[collapsible=icon]:rounded-lg">
            <Layers className="h-5 w-5 md:h-6 md:w-6 transition-all duration-300 group-data-[collapsible=icon]:h-5 group-data-[collapsible=icon]:w-5" />
          </div>
          <div className="ml-3.5 flex flex-col overflow-hidden transition-all duration-300 group-data-[collapsible=icon]:w-0 group-data-[collapsible=icon]:ml-0 group-data-[collapsible=icon]:opacity-0">
            <span className="font-semibold text-lg tracking-tight whitespace-nowrap uppercase leading-none opacity-100 duration-200">
              LumenHive
            </span>
          </div>
        </div>
      </SidebarHeader>

      {/* Content — Responsive Navigation */}
      <SidebarContent className="px-3 py-6 overflow-hidden bg-brand-purple/95 group-data-[collapsible=icon]:px-2">
        <SidebarGroup className="p-0 space-y-2">
          <SidebarGroupLabel className="text-white/20 px-4 text-[0.625rem] font-medium uppercase tracking-[0.2em] mb-4 group-data-[collapsible=icon]:hidden animate-in fade-in slide-in-from-left-2">
            Operaciones del Centro
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="flex justify-center w-full group/item"
                >
                  <SidebarMenuButton
                    isActive={activeTab === item.tab}
                    onClick={() => onTabChange(item.tab)}
                    className={`
                      relative flex items-center min-h-[3.25rem] w-full rounded-xl transition-all duration-300 overflow-hidden 
                      py-2
                      group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0 
                      group-data-[collapsible=icon]:min-h-[2.5rem] group-data-[collapsible=icon]:h-[2.5rem] group-data-[collapsible=icon]:w-[2.5rem] group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:py-0
                      ${
                        activeTab === item.tab
                          ? "bg-white/10 text-white shadow-md shadow-black/5"
                          : "text-white/40 hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >
                    <div className="flex items-center w-full px-2.5 group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:justify-center">
                      <div
                        className={`
                        flex items-center justify-center rounded-lg transition-all duration-300 shrink-0 group-data-[collapsible=icon]:scale-90
                        ${activeTab === item.tab ? "text-white" : "text-white/50 group-hover/item:text-white"}
                      `}
                      >
                        <item.icon className="h-5 w-5 md:h-[1.375rem] md:w-[1.375rem]" />
                      </div>

                      <div className="ml-3.5 flex flex-col justify-center gap-0.5 overflow-hidden transition-all duration-300 group-data-[collapsible=icon]:w-0 group-data-[collapsible=icon]:ml-0 group-data-[collapsible=icon]:opacity-0">
                        <span className="font-semibold text-[0.8125rem] tracking-tight whitespace-nowrap leading-none">
                          {item.title}
                        </span>
                        <span className="text-[0.563rem] opacity-40 font-light uppercase tracking-wider truncate leading-none">
                          {item.description}
                        </span>
                      </div>

                      {activeTab === item.tab && (
                        <ChevronRight className="ml-auto h-3 w-3 text-white/30 animate-in fade-in slide-in-from-left-2 group-data-[collapsible=icon]:hidden" />
                      )}
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer — Responsive Profile */}
      <div className="mt-auto border-t border-white/5 p-4 bg-brand-purple/95 group-data-[collapsible=icon]:p-2 group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
        <div className="flex items-center w-full bg-white/5 p-2.5 rounded-[1.25rem] transition-all duration-300 border border-white/5 group-hover:border-white/10 group-data-[collapsible=icon]:w-auto group-data-[collapsible=icon]:p-1.5 group-data-[collapsible=icon]:rounded-xl group-data-[collapsible=icon]:border-0 group-data-[collapsible=icon]:bg-transparent">
          <div className="relative shrink-0">
            <div className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-brand-green flex items-center justify-center text-white text-[0.75rem] font-semibold border-2 border-brand-purple shadow-sm">
              LH
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 md:w-3 md:h-3 bg-brand-green rounded-full border-2 border-brand-purple"></div>
          </div>
          <div className="ml-3 flex flex-col overflow-hidden transition-all duration-300 group-data-[collapsible=icon]:w-0 group-data-[collapsible=icon]:ml-0 group-data-[collapsible=icon]:hidden">
            <span className="text-[0.8125rem] font-semibold text-white truncate leading-none mb-1">
              Administrador
            </span>
            <span className="text-[0.65rem] text-white/50 font-medium truncate leading-none">
              admin@lumenhive.net
            </span>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
