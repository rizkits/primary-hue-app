import { MainLayout } from "@/components/Layout/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Calendar, CheckCircle2, XCircle, Search, Filter, Download, MoreVertical } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Candling = () => {
  const stats = [
    {
      title: "Candling Hari Ini",
      value: 5,
      subtitle: "Telur yang dicandling",
      badge: "Hari Ini",
      icon: Calendar,
      color: "primary",
    },
    {
      title: "Telur Fertil",
      value: 3,
      subtitle: "91% tingkat kesuburan",
      badge: "91%",
      icon: CheckCircle2,
      color: "success",
    },
    {
      title: "Telur Infertil",
      value: 2,
      subtitle: "9% tidak berkembang",
      badge: "9%",
      icon: XCircle,
      color: "destructive",
    },
  ];

  const candlingHistory = [
    {
      date: "15 Okt 2025",
      status: "Selesai",
      totalEggs: 100,
      fertile: 91,
      infertile: 9,
      successRate: 91,
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Candling</h1>
            <p className="text-sm text-muted-foreground">Pantau dan kelola proses candling telur</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Eye className="w-4 h-4 mr-2" />
            Mulai Candling
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title} className="p-6 border-2 border-primary/10">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-${stat.color}/10`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                </div>
                <Badge
                  variant="outline"
                  className={`bg-${stat.color}/10 text-${stat.color} border-${stat.color}/20`}
                >
                  {stat.badge}
                </Badge>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.subtitle}</p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-foreground">Riwayat Candling</h2>
              <p className="text-sm text-muted-foreground">Hasil candling telur dari waktu ke waktu</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Search className="w-4 h-4 mr-2" />
                Cari
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          {candlingHistory.length > 0 ? (
            <div className="space-y-4">
              <div className="grid grid-cols-7 gap-4 pb-4 border-b text-sm font-semibold text-foreground">
                <div>Tanggal</div>
                <div>Status</div>
                <div>Total Telur</div>
                <div>Fertil</div>
                <div>Infertil</div>
                <div>Tingkat Kesuburan</div>
                <div className="text-right">Aksi</div>
              </div>

              {candlingHistory.map((record, index) => (
                <div key={index} className="grid grid-cols-7 gap-4 items-center py-4 border-b last:border-0">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {record.date}
                  </div>
                  <div>
                    <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                      ✓ {record.status}
                    </Badge>
                  </div>
                  <div className="text-sm font-semibold">{record.totalEggs}</div>
                  <div className="text-sm text-success">+ {record.fertile}</div>
                  <div className="text-sm text-destructive">+ {record.infertile}</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Progress value={record.successRate} className="h-2 flex-1" />
                      <span className="text-sm font-semibold">{record.successRate}%</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Belum terdapat riwayat candling</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Mulai proses candling untuk melihat riwayat di sini
              </p>
            </div>
          )}
        </Card>
      </div>
    </MainLayout>
  );
};

export default Candling;
