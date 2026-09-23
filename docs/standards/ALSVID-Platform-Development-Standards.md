# ALSVID Platform Development Standards

## 1. Purpose

This document is the permanent design standard for ALSVID Platform. All future discussions, development, refactoring, and SOP creation should follow this document.

## 2. Core Principles

### 2.1 One source of truth

All core business data must have one master source.

Examples:

- Product Master
- Customer Master
- Supplier Master
- Asset Center

Different systems only reference the master data and do not create duplicate data.

## 3. System Architecture Principle

ALSVID Platform uses modular architecture:

- Product Management
- Asset Management
- Customer Management
- Service Management
- Dealer Management
- SOP Knowledge Base

Modules can evolve independently but share common data services.

## 4. Product Management Rules

Product hierarchy:

Platform
→ Product Family
→ Product Model
→ Variant
→ SKU
→ Barcode / GTIN
→ Serial Number

SKU is the unique sales identifier.

Attributes such as category, type, color, battery, market version are independent dimensions and must not replace SKU.

## 5. Asset Management Rules

Images, videos, documents and technical files are managed by Asset Center.

Do not store files directly inside business modules.

Flow:

Upload
→ Asset Center
→ Storage Adapter
→ Object Storage
→ Business Reference

## 6. Storage Architecture

Storage must use adapter architecture.

Supported providers:

- Cloudflare R2
- AWS S3
- Alibaba OSS
- Tencent COS
- Local storage

Business code must not directly depend on one provider.

## 7. Development Process

All ideas follow:

Fragment discussion
→ Knowledge Base
→ Business Rule Confirmation
→ SOP
→ Data Model
→ UI Design
→ Development

## 8. SOP Management

Every important business rule must eventually become SOP documentation.

SOP format:

- Purpose
- Scope
- Roles
- Process
- Data requirements
- System operation
- Exceptions
- Version history

## 9. Future Chat Continuity

When moving to a new conversation window, this document is the permanent reference for ALSVID Platform rules.

New features must follow existing standards unless explicitly changed through a new version.