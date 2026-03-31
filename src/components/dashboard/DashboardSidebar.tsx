import { Plus, List, MessageSquare, Home, Megaphone, BarChart3 } from "lucide-react";
import vehanaLogo from "@/assets/vehana-logo.png";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "My Assistants", url: "/dashboard", icon: List },
  { title: "Create Assistant", url: "/dashboard/create", icon: Plus },
  { title: "Campaigns", url: "/dashboard/campaigns", icon: Megaphone },
  { title: "Conversation Logs", url: "/dashboard/logs", icon: MessageSquare },
  { title: "Analytics", url: "/dashboard/analytics", icon: BarChart3 },
];

export function DashboardSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      <SidebarContent>
        {/* Brand */}
        <div className="flex items-center gap-2 px-4 py-4 border-b border-border">
          <img src={vehanaLogo} alt="Vehana" className="h-7" />
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/dashboard"}
                      className="hover:bg-muted/50"
                      activeClassName="bg-primary/10 text-primary font-medium"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Back to site */}
        <div className="mt-auto border-t border-border p-3">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <NavLink to="/" className="hover:bg-muted/50" activeClassName="">
                  <Home className="mr-2 h-4 w-4" />
                  {!collapsed && <span className="text-sm">Back to site</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
