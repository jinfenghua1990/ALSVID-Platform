# ALSVID-OS Migration Module Map

## Target repository

`ALSVID-Platform` is the single future development repository.

## Migration source

`ALSVID-OS`

## Modules

| Source | Target |
|---|---|
| after-sales | modules/after-sales |
| brand | modules/brand |
| customer-center | modules/customer-center |
| dealer-center | modules/dealer-center |
| engineering-center | modules/engineering-center |
| exploded-view | modules/exploded-view |
| parts-library | modules/parts-library |
| permission-system | modules/permission-system |
| product-system | modules/product-system |
| products | modules/products |
| service-center | modules/service-center |
| supplier-center | modules/supplier-center |
| standards | docs/standards |
| ui-system | packages/ui-system |

## Migration rule

1. Preserve business logic.
2. Normalize naming.
3. Connect product, vehicle, parts and service data models.
4. Verify before archiving the old repository.
