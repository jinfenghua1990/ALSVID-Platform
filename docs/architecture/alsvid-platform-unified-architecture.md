# ALSVID Platform Unified Architecture

## Decision

ALSVID-Platform is the single source repository.

ALSVID-OS modules will be migrated into this repository and will no longer be developed as a separate product line.

## Target Structure

```
ALSVID-Platform

apps/
  storefront/      # Official website and Shopify frontend
  dealer/          # Dealer portal
  service/         # Customer service and warranty
  admin/           # Internal management

modules/
  product-system/
  parts-library/
  exploded-view/
  supplier-center/
  customer-center/
  dealer-center/
  after-sales/
  permission-system/

packages/
  product-core/
  vehicle-core/
  order-core/
  api-core/
```

## Principles

- One data model
- One platform
- Multiple access portals
- Future deployment can separate domains by permission

Examples:

- alsvid.com
- dealer.alsvid.com
- service.alsvid.com
- admin.alsvid.com
