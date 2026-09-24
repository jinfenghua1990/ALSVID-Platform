import { AdminShell } from "@/components/AdminShell";
import { db } from "@/lib/db";

export default async function ProductsPage() {
  const products = await db.productModel.findMany({
    include: { platform: true },
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
              <tr><th>型号</th><th>平台</th><th>平台含义</th><th>车架</th><th>轮径</th><th>电机</th><th>状态</th></tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td><strong>{product.code}</strong></td>
                  <td>{product.platform.code}</td>
                  <td>{product.platform.name}</td>
                  <td>{product.frameMaterial || "—"}</td>
                  <td>{product.wheelSize || "—"}</td>
                  <td>{product.motorPosition || "—"}</td>
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
