# IctDepositsForceRejectIctDepositResponse

## Example Usage

```typescript
import { IctDepositsForceRejectIctDepositResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: IctDepositsForceRejectIctDepositResponse = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `ictDeposit`                                                       | [components.IctDeposit](../../models/components/ictdeposit.md)     | :heavy_minus_sign:                                                 | OK                                                                 |
| `status`                                                           | [components.Status](../../models/components/status.md)             | :heavy_minus_sign:                                                 | INVALID_ARGUMENT: The request has an invalid argument.             |