"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
	LayoutDashboard,
	Store,
	Package,
	Boxes,
	Users,
	ShoppingCart,
	Receipt,
	Megaphone,
	BarChart3,
	HelpCircle,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const sidebarGroups = [
	{
		title: "Geral",
		items: [
			{
				title: "Visão Geral",
				href: "/dashboard",
				icon: LayoutDashboard,
			},
		],
	},
	{
		title: "Operação",
		items: [
			{
				title: "Loja",
				href: "/dashboard/loja",
				icon: Store,
			},
			{
				title: "Estoque",
				href: "/dashboard/estoque",
				icon: Boxes,
			},
			{
				title: "Produtos",
				href: "/dashboard/produtos",
				icon: Package,
			},
			{
				title: "Clientes",
				href: "/dashboard/clientes",
				icon: Users,
			},
			{
				title: "Vendas",
				href: "/dashboard/vendas",
				icon: ShoppingCart,
			},
			{
				title: "Compras e Despesas",
				href: "/dashboard/financeiro",
				icon: Receipt,
			},
		],
	},
	{
		title: "Crescimento",
		items: [
			{
				title: "Marketing",
				href: "/dashboard/marketing",
				icon: Megaphone,
			},
			{
				title: "Estatísticas",
				href: "/dashboard/estatisticas",
				icon: BarChart3,
			},
			{
				title: "Ajuda",
				href: "/dashboard/ajuda",
				icon: HelpCircle,
			},
		],
	},
];

interface SidebarProps {
	onMobileClose?: () => void;
}

export function Sidebar({ onMobileClose }: SidebarProps) {
	const pathname = usePathname();
	const [isCollapsed, setIsCollapsed] = useState(false);

	const handleLinkClick = () => {
		if (onMobileClose) onMobileClose();
	};

	return (
		<div
			className={cn(
				"flex h-full flex-col border-r bg-card shadow-sm transition-all duration-300",
				isCollapsed ? "w-16" : "w-72",
			)}
		>
			{/* Logo */}
			<div className="flex h-16 items-center border-b px-6 justify-between">
				{!isCollapsed && (
					<Link href="/dashboard" className="flex items-center gap-3 group">
						<div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
							<LayoutDashboard className="w-4 h-4 text-primary-foreground" />
						</div>
						<div className="leading-tight">
							<div className="text-base font-bold group-hover:text-primary transition-colors">
								Tebas
							</div>
							<div className="text-xs text-muted-foreground -mt-0.5">
								Tech
							</div>
						</div>
					</Link>
				)}

				{isCollapsed && (
					<div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center mx-auto">
						<LayoutDashboard className="w-4 h-4 text-primary-foreground" />
					</div>
				)}

				<Button
					variant="ghost"
					size="icon"
					className="h-8 w-8 hover:bg-muted"
					onClick={() => setIsCollapsed(!isCollapsed)}
				>
					{isCollapsed ? (
						<ChevronRight className="h-4 w-4" />
					) : (
						<ChevronLeft className="h-4 w-4" />
					)}
				</Button>
			</div>

			{/* Navigation Groups */}
			<nav className="flex-1 space-y-8 p-6">
				{sidebarGroups.map((group) => (
					<div key={group.title} className="space-y-3">
						{/* Group Title */}
						{!isCollapsed && (
							<h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-4">
								{group.title}
							</h3>
						)}

						{/* Group Items */}
						<div className="space-y-2">
							{group.items.map((item) => {
								const isActive = pathname === item.href;
								const Icon = item.icon;

								return (
									<Link
										key={item.href}
										href={item.href}
										onClick={handleLinkClick}
										className={cn(
											"group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 hover:bg-muted",
											isActive
												? "bg-primary text-primary-foreground shadow-md hover:bg-primary/90"
												: "text-muted-foreground hover:text-foreground",
											isCollapsed && "justify-center px-3 py-4",
										)}
										title={isCollapsed ? item.title : undefined}
									>
										<Icon
											className={cn(
												"transition-all duration-200",
												isCollapsed ? "h-5 w-5" : "h-4 w-4",
												isActive && !isCollapsed && "text-primary-foreground",
											)}
										/>
										{!isCollapsed && (
											<span className="group-hover:translate-x-0.5 transition-transform duration-200">
												{item.title}
											</span>
										)}
									</Link>
								);
							})}
						</div>
					</div>
				))}
			</nav>
		</div>
	);
}
