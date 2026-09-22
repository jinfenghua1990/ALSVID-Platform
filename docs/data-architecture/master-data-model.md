# ALSVID Platform Master Data Model

## Core Principle

All business modules use the same master data. No duplicated customer or product records.

## Product Master

Single source of truth for:

- Product model
- Specifications
- Media
- Documents
- BOM
- Parts
- Versions

Used by:

- Website
- B2B
- Service
- Internal management

## Customer Master

Single customer profile:

- Customer information
- Purchase history
- Vehicle ownership
- Service history

## Vehicle Master

Each bicycle has one lifecycle record:

- Serial number
- Product model
- Owner
- Purchase channel
- Warranty
- Repair history

## Order Master

All orders connect to the same data:

- Shopify orders
- Dealer orders
- Internal sales orders

## Data Flow

Product -> Order -> Customer -> Vehicle -> Service
