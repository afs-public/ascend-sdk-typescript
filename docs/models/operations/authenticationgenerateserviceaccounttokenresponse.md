# AuthenticationGenerateServiceAccountTokenResponse

## Example Usage

```typescript
import { AuthenticationGenerateServiceAccountTokenResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AuthenticationGenerateServiceAccountTokenResponse = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `token`                                                            | [components.Token](../../models/components/token.md)               | :heavy_minus_sign:                                                 | OK                                                                 |
| `status`                                                           | [components.Status](../../models/components/status.md)             | :heavy_minus_sign:                                                 | INVALID_ARGUMENT: The request was not well formed.                 |