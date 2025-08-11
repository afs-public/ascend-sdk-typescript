# FeesGetFeeResponse

## Example Usage

```typescript
import { FeesGetFeeResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: FeesGetFeeResponse = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `transfersFee`                                                     | [components.TransfersFee](../../models/components/transfersfee.md) | :heavy_minus_sign:                                                 | OK                                                                 |
| `status`                                                           | [components.Status](../../models/components/status.md)             | :heavy_minus_sign:                                                 | INVALID_ARGUMENT: The request has an invalid argument.             |