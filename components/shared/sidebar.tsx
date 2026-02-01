"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import {
  LayoutDashboard,
  Store,
  Boxes,
  Package,
  Users,
  ShoppingCart,
  Receipt,
  Megaphone,
  BarChart3,
  HelpCircle,
} from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  icon: React.ElementType;
};

type NavGroup = {
  title: string;
  items: NavItem[];
};

const menu: NavGroup[] = [
  {
    title: "GERAL",
    items: [{ label: "Visão Geral", href: "/dashboard", icon: LayoutDashboard }],
  },
  {
    title: "OPERAÇÃO",
    items: [
      { label: "Loja", href: "/dashboard/loja", icon: Store },
      { label: "Estoque", href: "/dashboard/estoque", icon: Boxes },
      { label: "Cadastro", href: "/dashboard/cadastro", icon: Package },
      { label: "Clientes", href: "/dashboard/clientes", icon: Users },
      { label: "Venda", href: "/dashboard/venda", icon: ShoppingCart },
      { label: "Compra", href: "/dashboard/compra", icon: Receipt },
    ],
  },
  {
    title: "CRESCIMENTO",
    items: [
      { label: "Marketing", href: "/dashboard/marketing", icon: Megaphone },
      { label: "Estatísticas", href: "/dashboard/estatisticas", icon: BarChart3 },
      { label: "Ajuda", href: "/dashboard/ajuda", icon: HelpCircle },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname?.startsWith(href);
  };

  return (
    <aside className="flex h-screen w-[280px] flex-col border-r bg-card">
      {/* Header / Logo */}
      <div className="flex items-center gap-3 px-5 py-5 border-b">
        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-primary/10">
          <Image
            src="/logo-sem-fundo.png"
            alt="Tebas Tech"
            width={40}
            height={40}
            priority
          />
        </div>

        <div className="leading-tight">
          <div className="text-base font-semibold">Tebas</div>
          <div className="text-xs text-muted-foreground -mt-0.5">Tech</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {menu.map((group) => (
          <div key={group.title} className="mb-6">
            <div className="px-3 pb-2 text-xs font-semibold tracking-wide text-muted-foreground">
              {group.title}
            </div>

            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors",
                      "hover:bg-muted",
                      active && "bg-primary text-primary-foreground hover:bg-primary/90"
                    )}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t px-5 py-3 text-xs text-muted-foreground">
        Tebas Tech • v0.1
      </div>
    </aside>
  );
}
