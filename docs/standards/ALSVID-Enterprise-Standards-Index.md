# ALSVID Enterprise Standards Index

> 本文件作为 ALSVID Platform 长期不变的基础规范索引。
> 所有新增功能、代码、SOP、数据模型、UI设计必须遵循此规范。

## 01 系统架构规范

- 前端入口可以拆分，但底层数据必须统一。
- Admin、Dealer、Service、Customer 属于不同访问入口。
- Product Master、Customer Master、Asset Center 等作为核心数据源。

## 02 产品数据规范

产品结构：

Platform
→ Product Family
→ Model
→ Variant
→ SKU
→ Barcode
→ Serial Number

SKU用于销售和库存唯一识别。
类型、分类、颜色、电池、市场等属于属性维度。

## 03 素材管理规范

所有图片、视频、PDF、技术文件统一进入 Asset Center。

流程：

Upload
→ Asset Center
→ Storage Adapter
→ Object Storage
→ Business Module Reference

禁止业务模块直接保存文件。

## 04 存储接口规范

Storage Adapter统一接口。

支持：

- Cloudflare R2
- AWS S3
- Alibaba OSS
- Tencent COS
- Local Storage

业务代码不得绑定单一存储服务。

## 05 权限规范

采用RBAC权限模型。

管理员、经销商、客户、维修人员看到的数据范围不同。

禁止向外部用户暴露内部数据。

## 06 国际化规范

所有业务字段支持多语言。

语言内容独立管理。

支持：

- 中文
- English
- Deutsch

## 07 渠道发布规范

一个产品主数据，多渠道发布。

支持：

- Shopify
- Dealer B2B
- Service
- Internal System

禁止重复创建商品数据。

## 08 订单规范

订单类型需要区分：

- Shopify订单
- Dealer订单
- 样品订单
- 售后订单
- 配件订单
- 调拨订单
- 采购订单

## 09 售后车辆规范

建立Vehicle Master。

车辆关联：

- Customer
- Frame Serial
- Battery Serial
- Motor Serial
- Warranty
- Service History

## 10 API规范

采用API First原则。

Frontend
→ API
→ Business Service
→ Database

禁止页面直接操作数据库。

## 11 数据审计规范

重要数据修改必须记录：

- 操作人
- 时间
- 修改前
- 修改后

适用于：

- SKU
- 产品参数
- BOM
- 价格
- 保修政策

## 12 版本规范

所有产品、SOP、数据模型支持版本管理。

示例：

FC1 Spec V1.0
FC1 Spec V1.1

重大变化需要记录原因。

## 13 SOP规范

开发流程：

碎片讨论
→ 知识库
→ 业务规则
→ SOP
→ 数据模型
→ UI
→ Code

SOP分类：

01 产品管理
02 供应链
03 采购
04 出口
05 Shopify运营
06 B2B经销商
07 售后服务
08 CRM客户管理
09 系统操作
10 财务流程
