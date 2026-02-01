"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Package,
  Users,
  Receipt,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

type Stat = {
  title: string;
  value: string;
  helper: string;
  icon: React.ElementType;
};

const stats: Stat[] = [
  {
    title: "Vendas de hoje",
    value: "R$ 0,00",
    helper: "Atualize registrando uma venda",
    icon: ShoppingCart,
  },
  {
    title: "Vendas (7 dias)",
    value: "R$ 0,00",
    helper: "Acompanhe a evolução semanal",
    icon: TrendingUp,
  },
  {
    title: "Lucro estimado (mês)",
    value: "R$ 0,00",
    helper: "Depende do custo cadastrado nos produtos",
    icon: Receipt,
  },
  {
    title: "Estoque em alerta",
    value: "0 itens",
    helper: "Itens abaixo do mínimo (quando você configurar)",
    icon: AlertTriangle,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Cabeçalho */}
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">Visão Geral</h1>
        <p className="text-muted-foreground text-lg">
          Aqui você vê o resumo do dia e os atalhos pra registrar tudo rápido.
        </p>
      </div>

      {/* Cards principais */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.title} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {s.title}
                </CardTitle>
                <div className="p-2 rounded-lg bg-muted">
                  <Icon className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-3xl font-bold mb-2">{s.value}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.helper}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Ações rápidas + Últimos registros (placeholder) */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Ações rápidas</CardTitle>
            <p className="text-muted-foreground">
              Use esses botões pra registrar o movimento na hora.
            </p>
          </CardHeader>

          <CardContent className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Button asChild className="h-12 justify-start gap-2">
              <Link href="/dashboard/vendas">
                <ShoppingCart className="h-5 w-5" />
                Registrar venda
              </Link>
            </Button>

            <Button asChild variant="secondary" className="h-12 justify-start gap-2">
              <Link href="/dashboard/compras-e-despesas">
                <Receipt className="h-5 w-5" />
                Registrar compra / gasto
              </Link>
            </Button>

            <Button asChild variant="secondary" className="h-12 justify-start gap-2">
              <Link href="/dashboard/clientes">
                <Users className="h-5 w-5" />
                Cadastrar cliente
              </Link>
            </Button>

            <Button asChild variant="secondary" className="h-12 justify-start gap-2">
              <Link href="/dashboard/produtos">
                <Package className="h-5 w-5" />
                Cadastrar produto
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Últimos registros</CardTitle>
            <p className="text-muted-foreground">
              Depois a gente liga isso no banco de dados e mostra real.
            </p>
          </CardHeader>

          <CardContent className="space-y-3">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-muted">
                  <ShoppingCart className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium">Nenhuma venda registrada</p>
                  <p className="text-sm text-muted-foreground">Comece por “Registrar venda”</p>
                </div>
              </div>
              <span className="text-sm text-muted-foreground">—</span>
            </div>

            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-muted">
                  <Package className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium">Nenhum produto cadastrado</p>
                  <p className="text-sm text-muted-foreground">
                    Cadastre produtos com custo e preço de venda
                  </p>
                </div>
              </div>
              <span className="text-sm text-muted-foreground">—</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
