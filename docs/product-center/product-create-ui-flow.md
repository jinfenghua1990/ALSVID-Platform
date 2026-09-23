# ALSVID Product Center - Product Creation UI Flow

## Goal
Create products through a standardized workflow while keeping one product master data source.

## Workflow

1. Select platform
- FC Folding Carbon
- FT Fat Tire
- CT City Touring
- GT Grand Touring

2. Load product template automatically

Template controls:
- Required fields
- Technical parameters
- BOM structure
- Asset categories
- Service data requirements

3. Fill basic information

- Product name
- Model
- Version
- Year
- Market status
- Sales channels

4. Upload assets

Drag and drop:
- Product images
- Videos
- Manuals
- Technical documents

Upload flow:

User -> Asset Center -> Object Storage -> Asset ID -> Product Relation

5. Configure engineering data

- BOM
- Parts
- Accessories
- Replacement parts

6. Publish

Available channels:
- Website
- Shopify
- Dealer Portal
- Service Portal

## Design principle

Product data is the single source of truth. Other systems consume product information through permissions and APIs.
