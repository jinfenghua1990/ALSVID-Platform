# ALSVID Platform 企业级代码架构规划

## 目标

吸收成熟企业软件的架构思想，结合 ALSVID 自行车品牌业务，建立可持续扩展的平台。

原则：

- 数据中心化
- 模块解耦
- SOP驱动开发
- 产品主数据唯一
- 多端统一调用

---

## 总体架构

```
ALSVID Platform

├── Product Domain 产品域
│   ├── Product Master
│   ├── SKU
│   ├── Variant
│   ├── Attribute
│   ├── BOM
│   └── Lifecycle
│
├── Asset Domain 素材域
│   ├── Images
│   ├── Videos
│   ├── Documents
│   └── Storage Provider
│
├── Customer Domain 客户域
│   ├── Customer
│   ├── Vehicle
│   ├── Warranty
│   └── Service History
│
├── Order Domain 订单域
│
├── Dealer Domain 经销商域
│
├── Supply Chain Domain 供应链域
│
└── SOP Knowledge Domain
```

---

## 参考企业软件思想

采用类似：

- ERP 主数据管理
- PLM 产品生命周期管理
- CRM 客户管理
- DAM 数字资产管理
- IT Runbook/SOP管理

---

## 开发规则

1. 一个业务对象只有一个数据源。

例如：

产品数据只存在 Product Master。

官网、B2B、售后均调用。

2. 模块通过接口通信，不复制数据。

3. 所有业务流程最终沉淀为 SOP。

4. 新功能开发前先定义：

- 数据结构
- 权限
- 流程
- UI
- SOP

---

## 后续开发顺序

1. Product Master
2. SKU/Variant体系
3. Asset Center
4. Customer Vehicle体系
5. Service体系
6. Dealer体系
7. 商业分析体系
