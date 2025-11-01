import { MainLayout } from "@/components/Layout/MainLayout";
import { StatCard } from "@/components/Dashboard/StatCard";
import { ActivityItem } from "@/components/Dashboard/ActivityItem";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Egg, Activity, Award, Bell, Lightbulb, CheckCircle2, AlertCircle, Thermometer } from "lucide-react";

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard Candling</h1>
            <p className="text-sm text-muted-foreground">⏱️ Update terakhir: Hari Ini, 10:30 WIB</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Bell className="w-4 h-4 mr-2" />
            Notifikasi
            <span className="ml-2 px-2 py-0.5 bg-primary-foreground text-primary rounded-full text-xs">
              3
            </span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            icon={Egg}
            title="TOTAL TELUR"
            subtitle="Telur dalam mesin tetas"
            value={5}
            trend="+20% dari kemarin"
            variant="info"
          />
          <StatCard
            icon={Activity}
            title="CANDLING HARI INI"
            subtitle="Telur yang di candling"
            value={70}
            variant="primary"
          />
          <StatCard
            icon={Award}
            title="TELUR FERTILITAS"
            subtitle="Presentase tetas telur"
            value="80%"
            trend="Sangat baik"
            variant="success"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-foreground">Suhu & Kelembaban Mesin Tetas</h2>
                <p className="text-sm text-muted-foreground">Data historis 24 jam terakhir</p>
              </div>
              <div className="flex gap-2">
                <Button variant="default" size="sm">24 Jam</Button>
                <Button variant="outline" size="sm">7 Hari</Button>
                <Button variant="outline" size="sm">30 Hari</Button>
              </div>
            </div>

            <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
              <p className="text-muted-foreground">Chart Area - Temperature & Humidity Graph</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <Card className="p-4 bg-primary/5 border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <Thermometer className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Suhu Target</span>
                </div>
                <p className="text-2xl font-bold">40°C</p>
                <p className="text-xs text-success">✓ Dalam range optimal</p>
              </Card>
              <Card className="p-4 bg-info/5 border-info/20">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-5 h-5 text-info" />
                  <span className="text-sm text-muted-foreground">Kelembaban Target</span>
                </div>
                <p className="text-2xl font-bold">60%</p>
                <p className="text-xs text-success">✓ Dalam range optimal</p>
              </Card>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-foreground">Aktivitas Terbaru</h2>
              <Button variant="link" className="text-primary">Lihat Semua →</Button>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Log aktivitas sistem hari ini</p>

            <div className="space-y-2">
              <ActivityItem
                icon={Lightbulb}
                title="Update LED"
                description="Konfigurasi LED berhasil diperbarui"
                time="3 menit yang lalu"
                variant="primary"
              />
              <ActivityItem
                icon={Lightbulb}
                title="Update LED"
                description="Konfigurasi LED berhasil diperbarui"
                time="16 menit yang lalu"
                variant="primary"
              />
              <ActivityItem
                icon={CheckCircle2}
                title="Candling Selesai"
                description="50 telur telah di candling dengan hasil 85% fertil"
                time="1 jam yang lalu"
                variant="success"
              />
              <ActivityItem
                icon={AlertCircle}
                title="Peringatan Suhu"
                description="Suhu mesin tetas 1 melebihi batas normal"
                time="3 jam yang lalu"
                variant="destructive"
              />
            </div>

            <Button variant="outline" className="w-full mt-4">Muat Lebih Banyak</Button>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-6 border-2 border-primary/20 hover:border-primary/40 transition-colors cursor-pointer">
            <Activity className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-bold text-foreground mb-1">Mulai Candling</h3>
            <p className="text-xs text-muted-foreground">Proses candling baru</p>
          </Card>
          <Card className="p-6 border-2 border-info/20 hover:border-info/40 transition-colors cursor-pointer">
            <Egg className="w-8 h-8 text-info mb-3" />
            <h3 className="font-bold text-foreground mb-1">Tambah Telur</h3>
            <p className="text-xs text-muted-foreground">Input telur baru</p>
          </Card>
          <Card className="p-6 border-2 border-success/20 hover:border-success/40 transition-colors cursor-pointer">
            <Thermometer className="w-8 h-8 text-success mb-3" />
            <h3 className="font-bold text-foreground mb-1">Cek Status Mesin</h3>
            <p className="text-xs text-muted-foreground">Monitor suhu dan kelembaban</p>
          </Card>
          <Card className="p-6 border-2 border-warning/20 hover:border-warning/40 transition-colors cursor-pointer">
            <Award className="w-8 h-8 text-warning mb-3" />
            <h3 className="font-bold text-foreground mb-1">Laporan Harian</h3>
            <p className="text-xs text-muted-foreground">Lihat ringkasan hari ini</p>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
