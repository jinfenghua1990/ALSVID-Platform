# ALSVID Service Portal API Reserved Standard

## Purpose

Reserve API capability for future lightweight customer service portal, PWA, and possible mobile applications.

## Design Principle

Do not build a heavy native APP in the early stage.
Use Web Service Portal / PWA first.
All future clients consume the same API.

## Architecture

Customer Portal / PWA / APP

↓

ALSVID API Gateway

↓

Business Services

↓

Vehicle Master / Customer Master / Order Master / Service Center

## Reserved API Modules

### Vehicle API

- Query vehicle by frame serial number
- Get vehicle profile
- Get warranty status
- Get component information

Example:

GET /api/v1/vehicles/{frameSerial}

### Customer Vehicle Binding API

- Bind customer and vehicle
- Verify ownership
- View purchased products

### Warranty API

- Query warranty period
- Submit warranty request
- Warranty history

### Service API

- Create repair request
- Upload repair images
- Track repair status
- View service history

### Notification API

Support future:

- Email
- WhatsApp
- Push notification
- Mobile application notification

### QR / Link API

Reserve dynamic vehicle access:

- Generate vehicle access link
- Generate dynamic QR code
- Verify access permission

## Security Rules

Customer can only access owned vehicles.

Dealer access and internal access must use permission control.

Do not expose internal product cost, supplier, or operational data.

## Future Compatibility

This API layer must support:

- PWA
- iOS App
- Android App
- Dealer Portal
- Service Portal
