import { useState } from "react";
import { MainLayout } from "@/components/Layout/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, Shield, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

const Profil = () => {
  const [activeTab, setActiveTab] = useState<"profile" | "security">("profile");
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Profil</h1>
          <p className="text-sm text-muted-foreground">Kelola informasi profil dan pengaturan akun Anda</p>
        </div>

        <div className="flex gap-2 bg-card p-2 rounded-xl border-2 border-border w-fit">
          <Button
            variant={activeTab === "profile" ? "default" : "ghost"}
            onClick={() => setActiveTab("profile")}
            className={cn(
              "gap-2",
              activeTab === "profile" && "bg-primary text-primary-foreground"
            )}
          >
            <User className="w-4 h-4" />
            Informasi Profil
          </Button>
          <Button
            variant={activeTab === "security" ? "default" : "ghost"}
            onClick={() => setActiveTab("security")}
            className={cn(
              "gap-2",
              activeTab === "security" && "bg-primary text-primary-foreground"
            )}
          >
            <Shield className="w-4 h-4" />
            Keamanan
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-32 bg-primary" />
            <div className="relative flex flex-col items-center">
              <Avatar className="w-24 h-24 border-4 border-card bg-card mb-4">
                <AvatarFallback className="bg-foreground text-background text-2xl font-bold">
                  AC
                </AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-bold text-foreground">Admin Candling</h2>
              <p className="text-sm text-muted-foreground">Candling Administrator</p>
            </div>
          </Card>

          <Card className="lg:col-span-2 p-8">
            {activeTab === "profile" ? (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Informasi Profil</h3>
                    <p className="text-sm text-muted-foreground">Update informasi personal dan profesional Anda</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nama</Label>
                    <Input
                      id="name"
                      defaultValue="Admin Candling"
                      className="mt-1.5"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Supporting text</p>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="admin@mail.com"
                      className="mt-1.5"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Supporting text</p>
                  </div>

                  <div>
                    <Label htmlFor="phone">Nomor Telepon</Label>
                    <Input
                      id="phone"
                      defaultValue="+62 812-3456-7890"
                      className="mt-1.5"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Supporting text</p>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    💾 Simpan Perubahan
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Ubah Password</h3>
                    <p className="text-sm text-muted-foreground">
                      Pastikan akun Anda tetap aman dengan password yang kuat
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="current-password">Password Saat Ini</Label>
                    <div className="relative">
                      <Input
                        id="current-password"
                        type={showPassword.current ? "text" : "password"}
                        placeholder="Masukkan password saat ini"
                        className="mt-1.5 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword({ ...showPassword, current: !showPassword.current })
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground mt-0.75"
                      >
                        {showPassword.current ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Supporting text</p>
                  </div>

                  <div>
                    <Label htmlFor="new-password">Password Baru</Label>
                    <div className="relative">
                      <Input
                        id="new-password"
                        type={showPassword.new ? "text" : "password"}
                        placeholder="Masukkan password baru"
                        className="mt-1.5 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword({ ...showPassword, new: !showPassword.new })
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground mt-0.75"
                      >
                        {showPassword.new ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Supporting text</p>
                  </div>

                  <div>
                    <Label htmlFor="confirm-password">Konfirmasi Password</Label>
                    <div className="relative">
                      <Input
                        id="confirm-password"
                        type={showPassword.confirm ? "text" : "password"}
                        placeholder="Konfirmasi password baru"
                        className="mt-1.5 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword({ ...showPassword, confirm: !showPassword.confirm })
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground mt-0.75"
                      >
                        {showPassword.confirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Supporting text</p>
                  </div>

                  <Card className="p-4 bg-primary/5 border-primary/20">
                    <p className="text-sm font-semibold text-foreground mb-2">Tips Password Aman:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Minimal 8 karakter</li>
                      <li>• Kombinasi huruf besar, kecil, angka, dan simbol</li>
                      <li>• Jangan gunakan informasi pribadi</li>
                    </ul>
                  </Card>
                </div>

                <div className="flex justify-end pt-4">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    🔒 Update Password
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profil;
