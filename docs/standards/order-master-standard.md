# ALSVID Order Master Standard

## Purpose

建立统一订单主数据，连接销售、采购、物流、车辆、售后和财务。

## Principle

订单是业务链路的重要节点，但不是唯一数据源。

## Order Types

- Shopify Customer Order
- Dealer Order
- Sample Order
- Spare Parts Order
- Service Order
- Purchase Order
- Internal Transfer Order

## Structure

Order
↓
Order Items
↓
SKU
↓
Vehicle / Serial Number
↓
Customer

## Required Fields

- Order ID
- Channel
- Customer
- SKU
- Quantity
- Payment Status
- Fulfillment Status
- Logistics Information
- Related Vehicle

## API Reserved

Order query, order status sync, Shopify integration, dealer order and service order interfaces should be reserved.
