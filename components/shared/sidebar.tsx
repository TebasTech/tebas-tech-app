"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
	Store,
	Boxes,
	Package,
	Users,
	ShoppingCart,
	Receipt,
	Megaphone,
	BarChart3,
	HelpCircle,
	LayoutDashboard,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menu = [
	{ title: "Loja", href: "/dashboard/loja", icon: Store },
	{ title: "Estoque", href: "/dashboard/estoque", icon: Boxes },
	{ title: "Cadastro", href: "/dashboard/cadastro", icon: Package },
	{ title: "Clientes", href: "/dashboard/clientes", icon: Users },
	{ title: "Venda", href: "/dashboard/venda", icon: ShoppingCart },
	{ title: "Compra", href: "/dashboard/compra", icon: Receipt },
	{ title: "Marketing", href: "/dashboard/marketing", icon: Megaphone },
	{ title: "Estatísticas", href: "/dashboard/estatisticas", icon: BarChart3 },
	{ title: "Ajuda", href: "/dashboard/ajuda", icon: HelpCircle },
];

interface SidebarProps {
	onMobileClose?: () => void;
}

export function Sidebar({ onMobileClose }: SidebarProps) {
	const pathname = usePathname();

	const handleLinkClick = () => {
		if (onMobileClose) onMobileClose();
	};

	return (
		<aside className="h-screen w-72 bg-[hsl(var(--sidebar-background))] text-white flex flex-col border-r border-white/10">
			{/* TOPO / LOGO */}
			<div className="flex items-center gap-3 px-5 py-5 border-b border-white/10">
				<div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden">
					<Image
						src="/logo-sem-fundo.png"
						alt="Tebas Tech"
						width={40}
						height={40}
						priority
					/>
				</div>

				<div className="flex flex-col leading-tight">
					<span className="font-bold text-lg">Tebas</span>
					<span className="text-xs opacity-70 -mt-0.5">Tech</span>
				</div>

				<div className="ml-auto opacity-70">
					<LayoutDashboard size={18} />
				</div>
			</div>

			{/* MENU */}
			<nav className="flex-1 px-3 py-4 space-y-2">
				{menu.map((item) => {
					const Icon = item.icon;
					const active = pathname === item.href;

					return (
						<Link
							key={item.href}
							href={item.href}
							onClick={handleLinkClick}
							className={cn(
								"flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all",
								active
									? "bg-[hsl(var(--sidebar-accent))] text-white font-semibold shadow"
									: "text-white/80 hover:bg-white/10 hover:text-white",
							)}
						>
							<Icon size={18} />
							{item.title}
						</Link>
					);
				})}
			</nav>

			{/* RODAPÉ */}
			<div className="p-4 text-xs text-white/60 border-t border-white/10">
				Tebas Tech © {new Date().getFullYear()}
			</div>
		</aside>
	);
}
