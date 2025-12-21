import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, LogOut, Settings, ChevronDown, Bell } from "lucide-react";

interface MainLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onLogout: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  activeTab,
  onTabChange,
  onLogout,
}) => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="group/layout flex h-screen w-full bg-[#FBFBFE] dark:bg-[#020617] font-sans overflow-hidden selection:bg-brand-purple/10 selection:text-brand-purple transition-colors duration-300">
        <AppSidebar activeTab={activeTab} onTabChange={onTabChange} />

        <SidebarInset className="flex flex-col flex-1 h-full min-w-0 bg-transparent relative transition-all duration-300">
          {/* Header Superior — Clean & Responsive */}
          <header className="sticky top-0 z-10 flex h-14 sm:h-16 md:h-16 shrink-0 items-center justify-between border-b border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 sm:px-8 shadow-sm transition-all duration-300 ease-in-out md:group-has-[[data-state=expanded]]/layout:pl-16">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="-ml-1 h-9 w-9 [&_svg]:h-5 [&_svg]:w-5 dark:text-slate-400 dark:hover:bg-slate-800" />
              <div className="flex flex-col">
                <span className="text-[0.8125rem] font-bold text-[#1A1C21] dark:text-white uppercase tracking-[0.3em] opacity-80 transition-colors duration-300">
                  LumenHive
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Notificaciones */}
              <button
                title="Notificaciones de Red"
                aria-label="Ver notificaciones"
                className="h-9 w-9 flex items-center justify-center rounded-lg text-neutral-medium dark:text-slate-400 hover:text-brand-purple hover:bg-brand-purple/5 dark:hover:bg-brand-purple/10 transition-all relative"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-brand-green rounded-full border border-white dark:border-slate-900"></span>
              </button>

              <div className="hidden sm:block h-6 w-px bg-neutral-border/40 dark:bg-slate-800" />

              {/* Perfil de Usuario */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-3 pl-1 pr-2 py-1.5 rounded-xl hover:bg-neutral-light/50 dark:hover:bg-slate-800 transition-all outline-none group">
                    <div className="relative">
                      <Avatar className="h-8 w-8 border border-white dark:border-slate-700 shadow-sm ring-1 ring-neutral-border/30 dark:ring-slate-700">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-brand-purple text-white text-[0.625rem] font-bold uppercase">
                          AD
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-brand-green rounded-full border border-white dark:border-slate-900 shadow-sm"></div>
                    </div>
                    <div className="hidden md:flex flex-col items-start leading-tight">
                      <span className="text-xs font-bold text-[#1A1C21] dark:text-slate-200 transition-colors duration-300">
                        Administrador
                      </span>
                    </div>
                    <ChevronDown className="hidden md:block h-4 w-4 text-neutral-medium dark:text-slate-400 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-60 mt-2 rounded-xl border border-neutral-border/60 dark:border-slate-800 shadow-xl p-2 bg-white dark:bg-slate-900 transition-colors duration-300"
                >
                  <div className="px-3 py-3 mb-2 bg-[#F8F9FD] dark:bg-slate-800/50 rounded-lg border border-neutral-border/30 dark:border-slate-700 transition-colors duration-300">
                    <p className="text-[0.625rem] font-bold text-neutral-medium dark:text-slate-400 uppercase tracking-wider mb-0.5 transition-colors duration-300">
                      Sesión Activa
                    </p>
                    <p className="text-xs font-semibold text-brand-purple dark:text-brand-purpleDark truncate">
                      administrador@lumenhive.net
                    </p>
                  </div>
                  <DropdownMenuItem
                    onClick={() => onTabChange("Profile")}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-brand-purple/5 dark:hover:bg-slate-800/50 transition-all dark:focus:bg-slate-800"
                  >
                    <User className="h-4 w-4 text-neutral-600 dark:text-slate-400 transition-colors duration-300" />
                    <span className="text-xs font-medium text-neutral-800 dark:text-slate-200 transition-colors duration-300">
                      Perfil del Gestor
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => onTabChange("Settings")}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-brand-purple/5 dark:hover:bg-slate-800/50 transition-all dark:focus:bg-slate-800"
                  >
                    <Settings className="h-4 w-4 text-neutral-600 dark:text-slate-400 transition-colors duration-300" />
                    <span className="text-xs font-medium text-neutral-800 dark:text-slate-200 transition-colors duration-300">
                      Configuración de Sistema
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-neutral-border/50 dark:bg-slate-800 my-1.5 transition-colors duration-300" />
                  <DropdownMenuItem
                    onClick={onLogout}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-red-50 dark:hover:bg-rose-900/10 text-red-600 dark:text-rose-400 transition-all dark:focus:bg-rose-900/20"
                  >
                    <LogOut className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Cerrar Sesión
                    </span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          <main className="flex-1 p-6 sm:p-8 md:p-10 transition-all duration-300 ease-in-out md:group-has-[[data-state=expanded]]/layout:pl-16 animate-in fade-in overflow-hidden bg-[#FBFBFE] dark:bg-[#020617]">
            <div className="w-full h-full">
              <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-xl sm:rounded-2xl shadow-sm overflow-hidden h-full relative flex flex-col transition-colors duration-300">
                {/* Minimal Grid Background */}
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] dark:opacity-20 [background-size:20px_20px] pointer-events-none opacity-50 transition-colors duration-300"></div>
                <div className="relative flex-1 p-6 sm:p-8 overflow-y-auto w-full min-h-0 pb-20 scrollbar-hide">
                  {children}
                </div>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
