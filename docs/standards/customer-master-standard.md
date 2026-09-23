# ALSVID Customer Master Standard

## Purpose

建立统一客户主数据，供官网、B2B、售后、财务等模块调用。

## Principle

一个客户一个主档，不允许不同系统重复创建客户。

## Structure

Customer Master

- Customer ID
- Customer Type
- Personal / Company Information
- Contact Information
- Address
- Language Preference
- Country / Market
- Related Orders
- Related Vehicles
- Service History

## Customer Types

- B2C Customer
- Dealer
- Distributor
- Service Partner
- Internal Customer

## Relationship

Customer
↓
Orders
↓
Vehicles
↓
Warranty
↓
Service Records

## API Reserved

Customer query, customer profile, customer vehicle binding and notification interfaces should be reserved.
