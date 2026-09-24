import { AdminShell } from "@/components/AdminShell";
import { db } from "@/lib/db";

export default async function PartsPage() {
  const parts = await db.part.findMany({
    include: { _count: { select: { bomItems: true } } },
    orderBy: { sku: "asc" },
  });

  return (
    <AdminShell title="配件中心">
      <section className="panel">
        <div className="panel-heading"><div><div className="eyebrow">PART MASTER</div><h2>统一配件库</h2></div><span className="muted">{parts.length} 个配件</span></div>
        {parts.length === 0 ? <p className="empty-state">暂无真实配件数据。配件主数据已准备好，可承接供应商料号、BOM、爆炸图和售后备件。</p> : (
          <div className="table-wrap"><table><thead><tr><th>SKU</th><th>名称</th><th>分类</th><th>供应商料号</th><th>引用车型</th></tr></thead><tbody>
            {parts.map((part) => <tr key={part.id}><td><strong>{part.sku}</strong></td><td>{part.name}</td><td>{part.category || "—"}</td><td>{part.manufacturerPartNo || "—"}</td><td>{part._count.bomItems}</td></tr>)}
          </tbody></table></div>
        )}
      </section>
    </AdminShell>
  );
}
