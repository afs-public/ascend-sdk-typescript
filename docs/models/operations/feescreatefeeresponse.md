# FeesCreateFeeResponse

## Example Usage

```typescript
import { FeesCreateFeeResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: FeesCreateFeeResponse = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `transfersFee`                                                     | [components.TransfersFee](../../models/components/transfersfee.md) | :heavy_minus_sign:                                                 | OK                                                                 |
| `status`                                                           | [components.Status](../../models/components/status.md)             | :heavy_minus_sign:                                                 | INVALID_ARGUMENT: The request has an invalid argument.             |