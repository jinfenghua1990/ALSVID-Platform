export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="brand login-brand">ALSVID</div>
        <p className="login-kicker">Brand Operating System</p>
        <h1>管理后台</h1>
        <p className="muted">产品、车辆、售后与经销商统一管理。</p>

        {params.error ? <div className="error-box">账号或密码不正确。</div> : null}

        <form action="/api/auth/login" method="post" className="login-form">
          <label>
            邮箱
            <input name="email" type="email" defaultValue="admin@alsvid.com" required />
          </label>
          <label>
            密码
            <input name="password" type="password" required />
          </label>
          <button type="submit">登录 ALSVID Platform</button>
        </form>
      </section>
    </main>
  );
}
