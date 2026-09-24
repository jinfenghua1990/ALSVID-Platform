# ALSVID Platform

ALSVID 品牌数字化主平台。当前仓库已从“文档/模块骨架”进入可运行应用阶段。

## 当前可运行能力

- 管理员登录与 12 小时会话
- 管理后台工作台
- Prisma + SQLite 本地数据库
- FC / FT / CT / GT 技术平台主数据
- FC1 / FT1 / CT1 / GT1 初始型号
- 产品中心列表
- 产品 REST API
- 车辆、配件、BOM、售后、客户、经销商、订单数据模型
- 健康检查 API

## 本地启动

1. npm install
2. cp .env.example .env
3. 修改 SESSION_SECRET、ADMIN_EMAIL、ADMIN_PASSWORD
4. npm run db:push
5. npm run db:seed
6. npm run dev

访问 http://localhost:3000

## 产品体系

- FC — Folding Carbon — FC1
- FT — Fat Tire — FT1
- CT — City Touring — CT1
- GT — Grand Touring — GT1

FC1 当前预置：20 inch / Carbon Fiber / Mid-drive。

## 后续顺序

1. 产品详情、SKU、Variant
2. BOM 与爆炸图
3. 车辆车架号档案
4. 客户与经销商
5. 售后维修工单
6. Shopify / Dealer API
7. Admin / Dealer / Service 权限细分
8. 对象存储与素材中心
