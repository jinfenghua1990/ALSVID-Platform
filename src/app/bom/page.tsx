import { AdminShell } from "@/components/AdminShell";
import { db } from "@/lib/db";

export default async function BomPage() {
  const models = await db.productModel.findMany({
    include: { platform: true, _count: { select: { bomItems: true } } },
    orderBy: { code: "asc" },
  });

  return (
    <AdminShell title="BOM / 爆炸图">
      <section className="panel">
        <div className="panel-heading"><div><div className="eyebrow">SERVICE STRUCTURE</div><h2>车型拆解主入口</h2></div></div>
        <div className="module-grid">
          {models.map((model) => (
            <div key={model.id}>
              <strong>{model.code}</strong>
              <span>{model.platform.name}</span>
              <span>{model._count.bomItems} 个 BOM 项</span>
            </div>
          ))}
        </div>
        <p className="empty-state">下一层会在这里接真实爆炸图坐标（diagramX / diagramY）、零件 callout 与维修工单选件。</p>
      </section>
    </AdminShell>
  );
}
