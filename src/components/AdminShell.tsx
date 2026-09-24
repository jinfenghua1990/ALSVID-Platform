import Link from "next/link";
import { ReactNode } from "react";

const navigation = [
  { href: "/", label: "工作台" },
  { href: "/products", label: "产品中心" },
  { href: "/bom", label: "BOM / 爆炸图" },
  { href: "/parts", label: "配件中心" },
  { href: "#", label: "车辆档案" },
  { href: "#", label: "售后服务" },
  { href: "#", label: "经销商" },
];

export function AdminShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div>
          <div className="brand">ALSVID</div>
          <div className="brand-subtitle">Platform</div>
        </div>

        <nav className="nav">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href} className="nav-item">
              {item.label}
            </Link>
          ))}
        </nav>

        <form action="/api/auth/logout" method="post">
          <button className="logout" type="submit">退出登录</button>
        </form>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <div className="eyebrow">ALSVID ADMIN</div>
            <h1>{title}</h1>
          </div>
          <div className="status-pill">System Online</div>
        </header>
        {children}
      </main>
    </div>
  );
}
