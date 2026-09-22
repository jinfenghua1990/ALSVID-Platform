# ALSVID Platform 部署规划

## 当前阶段

单一 GitHub 项目开发：

ALSVID-Platform

## 后续生产环境

根据使用对象拆分入口：

- 官网：alsvid.com（Shopify）
- 客户售后：service.alsvid.com
- 经销商：dealer.alsvid.com
- 内部管理：admin.alsvid.com

底层共享：

- 产品数据
- 用户权限
- API服务
- 数据库

前期不拆库，避免重复开发。
