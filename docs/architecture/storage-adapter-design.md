# ALSVID Storage Adapter Design

## Goal

Build a unified asset storage layer. Business modules should not directly depend on Cloudflare R2 or any single provider.

## Architecture

```
Business Modules
(Product / Service / Dealer / CMS)
          |
          v
Asset Center
          |
          v
Storage Adapter Interface
          |
 +--------+---------+---------+
 |                  |         |
Cloudflare R2    OSS       COS
 |                  |         |
Local Storage   AWS S3   Future Providers
```

## Rules

1. All files enter through Asset Center.
2. Product data stores asset IDs, not physical file paths.
3. Storage providers can be switched by configuration.
4. Permissions are handled before generating access URLs.

## Supported Asset Types

- Product images
- Marketing videos
- Manuals
- Service documents
- BOM drawings
- Dealer materials

## Future API Interface

```
upload(file, metadata)
delete(assetId)
getUrl(assetId)
listAssets(filter)
```

## Provider Configuration

Example:

```
STORAGE_PROVIDER=r2

# future
STORAGE_PROVIDER=oss
STORAGE_PROVIDER=s3
```

This keeps ALSVID independent from infrastructure providers.