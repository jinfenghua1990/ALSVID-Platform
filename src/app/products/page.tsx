import Link from "next/link";
import { AdminShell } from "@/components/AdminShell";
import { db } from "@/lib/db";

export default async function ProductsPage() {
  const products = await db.productModel.findMany({
    include: { platform: true, _count: { select: { variants: true, bomItems: true, vehicles: true } } },
    orderBy: { code: "asc" },
  });

  return (
    <AdminShell title="产品中心">
      <section className="panel">
        <div className="panel-heading">
          <div><div className="eyebrow">PRODUCT MASTER</div><h2>ALSVID 产品体系</h2></div>
          <span className="muted">{products.length} 个型号</span>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>型号</th><th>平台</th><th>平台含义</th><th>SKU</th><th>BOM</th><th>车辆</th><th>状态</th></tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td><Link className="table-link" href={"/products/" + product.code}><strong>{product.code}</strong></Link></td>
                  <td>{product.platform.code}</td>
                  <td>{product.platform.name}</td>
                  <td>{product._count.variants}</td>
                  <td>{product._count.bomItems}</td>
                  <td>{product._count.vehicles}</td>
                  <td><span className="status-dot">{product.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AdminShell>
  );
}
