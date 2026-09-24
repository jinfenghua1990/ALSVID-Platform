import { notFound } from "next/navigation";
import { AdminShell } from "@/components/AdminShell";
import { db } from "@/lib/db";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const product = await db.productModel.findUnique({
    where: { code: code.toUpperCase() },
    include: {
      platform: true,
      variants: { orderBy: { sku: "asc" } },
      bomItems: { include: { part: true }, orderBy: { position: "asc" } },
      _count: { select: { vehicles: true } },
    },
  });

  if (!product) notFound();

  return (
    <AdminShell title={product.code}>
      <section className="detail-grid">
        <article className="panel">
          <div className="eyebrow">MODEL MASTER</div>
          <h2>{product.name}</h2>
          <dl className="detail-list">
            <div><dt>技术平台</dt><dd>{product.platform.code} · {product.platform.name}</dd></div>
            <div><dt>车架材料</dt><dd>{product.frameMaterial || "待维护"}</dd></div>
            <div><dt>轮径</dt><dd>{product.wheelSize || "待维护"}</dd></div>
            <div><dt>电机位置</dt><dd>{product.motorPosition || "待维护"}</dd></div>
            <div><dt>车辆档案</dt><dd>{product._count.vehicles}</dd></div>
          </dl>
        </article>

        <article className="panel">
          <div className="panel-heading"><div><div className="eyebrow">VARIANTS</div><h2>SKU / 版本</h2></div><span className="muted">{product.variants.length}</span></div>
          {product.variants.length === 0 ? <p className="empty-state">暂无 SKU。后续可在同一型号下维护 Standard / Pro、颜色和地区版本。</p> : (
            <div className="table-wrap"><table><thead><tr><th>SKU</th><th>版本</th><th>颜色</th><th>状态</th></tr></thead><tbody>
              {product.variants.map((variant) => <tr key={variant.id}><td><strong>{variant.sku}</strong></td><td>{variant.edition || variant.name}</td><td>{variant.color || "—"}</td><td>{variant.status}</td></tr>)}
            </tbody></table></div>
          )}
        </article>
      </section>

      <section className="panel">
        <div className="panel-heading"><div><div className="eyebrow">BOM</div><h2>整车配件结构</h2></div><span className="muted">{product.bomItems.length} 项</span></div>
        {product.bomItems.length === 0 ? <p className="empty-state">当前还没有导入真实 BOM。这里将直接承接后续爆炸图、维修选件和备件识别。</p> : (
          <div className="table-wrap"><table><thead><tr><th>位置</th><th>配件 SKU</th><th>名称</th><th>数量</th><th>标注</th></tr></thead><tbody>
            {product.bomItems.map((item) => <tr key={item.id}><td>{item.position || "—"}</td><td>{item.part.sku}</td><td>{item.part.name}</td><td>{item.quantity}</td><td>{item.callout || "—"}</td></tr>)}
          </tbody></table></div>
        )}
      </section>
    </AdminShell>
  );
}
