import { Home, TrendingUp, MessageCircle, CheckCircle, Settings } from 'lucide-react'
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
  SidebarRail,
} from '@/components/ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const navItems = [
  { title: 'Overview', icon: Home, href: '/' },
  { title: 'Trends & Analysis', icon: TrendingUp, href: '/trends' },
  { title: 'Sentiment Insights', icon: MessageCircle, href: '/sentiment' },
  { title: 'Issue Resolution', icon: CheckCircle, href: '/issues' },
]

export function AppSidebar() {
  return (
    <div className="fixed inset-y-0">
      <Sidebar className="w-[var(--sidebar-width)] border-r h-screen">
        <SidebarHeader>
          <div className="flex items-center space-x-2 py-4">
            <Avatar>
              <AvatarImage src="/logo.png" alt="Spa Analytics Logo" />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
            <h1 className="text-xl font-bold">Spa Analytics</h1>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.href} className="flex items-center space-x-3 py-2 rounded-md hover:bg-accent">
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <div className="mt-auto p-4">
          <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </Button>
        </div>
        <SidebarRail />
      </Sidebar>
    </div>
  )
}
