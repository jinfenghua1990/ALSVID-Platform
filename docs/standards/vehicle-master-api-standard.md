# ALSVID Vehicle Master API Standard

## Purpose

Define the future-compatible vehicle lifecycle interface. The first phase uses Web Service Portal; future PWA or APP clients must reuse the same API.

## Core Principle

Vehicle data is a single source of truth.

Customer Portal, Dealer Portal, Service Portal and future mobile applications must not create separate vehicle records.

## Vehicle Entity

Vehicle Master:

- vehicle_id
- product_id
- sku
- frame_serial_number
- motor_serial_number
- battery_serial_number
- customer_id
- order_id
- warranty_status
- service_status

## API Reserved Interfaces

### Vehicle Query

GET /api/vehicles/{frameSerial}

Purpose:

- Query vehicle information by frame serial number.
- Return authorized customer vehicle data.

### Vehicle Binding

POST /api/vehicles/bind

Purpose:

- Bind customer account with purchased vehicle.

### Warranty Query

GET /api/warranty/{vehicleId}

Purpose:

- Query warranty period and status.

### Service Request

POST /api/service/tickets

Purpose:

- Create repair request.
- Support image and video attachments through Asset Center.

### Notification

POST /api/notifications/events

Purpose:

- Trigger email, WhatsApp, push or future APP notifications.

## Security Requirements

- Customer can only access owned vehicles.
- Dealer can only access authorized customers and orders.
- Internal cost and supplier information must never be exposed.

## Future Extension

Reserved for:

- Mobile APP
- PWA
- IoT bicycle data
- Battery health data
- Riding data
