import { MainLayout } from "@/components/Layout/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Power, Egg, TrendingUp, AlertCircle, Plus, Zap, Settings, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MesinTetas = () => {
  const machines = [
    {
      id: 1,
      name: "Incubator 1",
      subtitle: "Mesin Tetas Utama",
      capacity: 5,
      maxCapacity: 10,
      temperature: 40,
      humidity: 60,
      status: "Sedang Berjalan",
      days: "Hari ke-7",
    },
    {
      id: 2,
      name: "Incubator 2",
      subtitle: "Mesin Tetas Cadangan",
      capacity: 18,
      maxCapacity: 20,
      temperature: 39,
      humidity: 62,
      status: "Sedang Berjalan",
      days: "Hari ke-12",
    },
  ];

  const stats = [
    { label: "Mesin Aktif", value: 2, icon: Power, badge: "Aktif", color: "primary" },
    { label: "Total Telur", value: 23, icon: Egg, color: "info" },
    { label: "Rata-rata Kualitas", value: "66%", icon: TrendingUp, color: "success" },
    { label: "Perlu Perhatian", value: 0, icon: AlertCircle, color: "warning" },
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Mesin Tetas</h1>
            <p className="text-sm text-muted-foreground">Kelola dan pantau status mesin tetas telur</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Plus className="w-4 h-4 mr-2" />
            Tambah Mesin
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6 border-2 border-primary/10">
              <div className="flex items-start justify-between mb-3">
                <div className={`p-3 rounded-xl bg-${stat.color}/10`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                </div>
                {stat.badge && (
                  <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                    {stat.badge}
                  </Badge>
                )}
              </div>
              <p className="text-2xl font-bold mb-1">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          {machines.map((machine) => (
            <Card key={machine.id} className="p-8 border-2 border-border">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                    <Egg className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">{machine.name}</h2>
                    <p className="text-sm text-muted-foreground">{machine.subtitle}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="border-primary text-primary">
                    <Zap className="w-4 h-4 mr-2" />
                    Setup LED
                  </Button>
                  <Button variant="outline" size="sm">
                    <Settings className="w-4 h-4 mr-2" />
                    Pengaturan
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="text-primary">
                        <Settings className="w-4 h-4 mr-2" />
                        Edit Mesin
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-primary">
                        <Zap className="w-4 h-4 mr-2" />
                        Setup LED Candling
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Power className="w-4 h-4 mr-2" />
                        Duplikat Mesin
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        Nonaktifkan Mesin
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        Hapus Mesin
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold">Kapasitas Telur</span>
                  <span className="text-sm font-bold">
                    {machine.capacity}/{machine.maxCapacity}
                  </span>
                </div>
                <Progress value={(machine.capacity / machine.maxCapacity) * 100} className="h-3" />
                <p className="text-xs text-muted-foreground mt-1">
                  {((machine.capacity / machine.maxCapacity) * 100).toFixed(0)}% kapasitas terisi
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Suhu Target</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">Target: 37 - 40°C</p>
                  <p className="text-3xl font-bold">{machine.temperature}°C</p>
                  <p className="text-xs text-success mt-1">✓ Dalam range optimal</p>
                </Card>

                <Card className="p-6 bg-info/5 border-info/20">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5 text-info" />
                    <span className="text-sm text-muted-foreground">Kelembaban Target</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">Target: 55 - 65%</p>
                  <p className="text-3xl font-bold">{machine.humidity}%</p>
                  <p className="text-xs text-success mt-1">✓ Dalam range optimal</p>
                </Card>
              </div>

              <div className="flex items-center gap-4 mt-6">
                <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                  ● {machine.status}
                </Badge>
                <Badge variant="outline">📅 {machine.days}</Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default MesinTetas;
