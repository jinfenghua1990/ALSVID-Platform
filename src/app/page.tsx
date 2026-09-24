import { AdminShell } from "@/components/AdminShell";
import { db } from "@/lib/db";

export default async function DashboardPage() {
  const [platforms, models, vehicles, tickets] = await Promise.all([
    db.productPlatform.count(),
    db.productModel.count(),
    db.vehicle.count(),
    db.serviceTicket.count(),
  ]);

  return (
    <AdminShell title="工作台">
      <section className="metric-grid">
        <article className="metric-card"><span>技术平台</span><strong>{platforms}</strong><small>FC / FT / CT / GT</small></article>
        <article className="metric-card"><span>产品型号</span><strong>{models}</strong><small>统一产品主数据</small></article>
        <article className="metric-card"><span>车辆档案</span><strong>{vehicles}</strong><small>按车架号管理</small></article>
        <article className="metric-card"><span>售后工单</span><strong>{tickets}</strong><small>服务链路预留</small></article>
      </section>

      <section className="panel">
        <div className="panel-heading">
          <div><div className="eyebrow">PHASE 1</div><h2>核心底座已启动</h2></div>
        </div>
        <div className="module-grid">
          <div><strong>产品中心</strong><span>可运行</span></div>
          <div><strong>登录与会话</strong><span>可运行</span></div>
          <div><strong>车辆档案</strong><span>数据模型已建立</span></div>
          <div><strong>BOM / 配件</strong><span>数据模型已建立</span></div>
          <div><strong>售后中心</strong><span>数据模型已建立</span></div>
          <div><strong>订单中心</strong><span>数据模型已建立</span></div>
        </div>
      </section>
    </AdminShell>
  );
}
