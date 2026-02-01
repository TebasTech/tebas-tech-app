"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import {
  LayoutDashboard,
  Store,
  Boxes,
  Users,
  ShoppingCart,
  BarChart3,
  Megaphone,
} from "lucide-react";

const menu = [
  {
    title: "GERAL",
    items: [
      { label: "Visão Geral", href: "/dashboard", icon: LayoutDashboard },
    ],
  },
  {
    title: "OPERAÇÃO",
    items: [
      { label: "Loja", href: "/dashboard/store", icon: Store },
      { label: "Estoque", href: "/dashboard/database", icon: Boxes },
      { label: "Produtos", href: "/dashboard/projects", icon: Boxes },
      { label: "Clientes", href: "/dashboard/users", icon: Users },
      { label: "Vendas", href: "/dashboard/messages", icon: ShoppingCart },
    ],
  },
  {
    title: "CRESCIMENTO",
    items: [
      { label: "Marketing", href: "/dashboard/help", icon: Megaphone },
      { label: "Estatísticas", href: "/dashboard/analytics", icon: BarChart3 },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-white border-r flex flex-col">
      {/* LOGO */}
      <div className="p-6 border-b flex items-center gap-3">
        <Image
          src="/logo-sem-fundo.png"
          alt="Tebas Tech"
          width={40}
          height={40}
        />
        <div className="leading-tight">
          <p className="font-bold text-lg text-slate-900">Tebas</p>
          <p className="text-xs text-blue-600 font-semibold">Tech</p>
        </div>
      </div>

      {/* MENU */}
      <nav className="flex-1 p-4 space-y-6">
        {menu.map((group) => (
          <div key={group.title}>
            <p className="text-xs text-slate-400 font-semibold mb-3">
              {group.title}
            </p>

            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition
                      ${
                        active
                          ? "bg-blue-600 text-white"
                          : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                  >
                    <Icon size={18} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
