# IdentityLookupServiceCreateIdentityLookupResponse

## Example Usage

```typescript
import { IdentityLookupServiceCreateIdentityLookupResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: IdentityLookupServiceCreateIdentityLookupResponse = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `httpMeta`                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)     | :heavy_check_mark:                                                     | N/A                                                                    |
| `identityLookup`                                                       | [components.IdentityLookup](../../models/components/identitylookup.md) | :heavy_minus_sign:                                                     | OK                                                                     |
| `status`                                                               | [components.Status](../../models/components/status.md)                 | :heavy_minus_sign:                                                     | INVALID_ARGUMENT: The request contains invalid fields or formatting    |