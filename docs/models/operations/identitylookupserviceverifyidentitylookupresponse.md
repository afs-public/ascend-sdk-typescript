# IdentityLookupServiceVerifyIdentityLookupResponse

## Example Usage

```typescript
import { IdentityLookupServiceVerifyIdentityLookupResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: IdentityLookupServiceVerifyIdentityLookupResponse = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `httpMeta`                                                                              | [components.HTTPMetadata](../../models/components/httpmetadata.md)                      | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `identityLookup`                                                                        | [components.IdentityLookup](../../models/components/identitylookup.md)                  | :heavy_minus_sign:                                                                      | OK                                                                                      |
| `status`                                                                                | [components.Status](../../models/components/status.md)                                  | :heavy_minus_sign:                                                                      | INVALID_ARGUMENT: The identity lookup name is malformed or verification code is invalid |