# CheckDepositsForceApproveCheckDepositResponse

## Example Usage

```typescript
import { CheckDepositsForceApproveCheckDepositResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: CheckDepositsForceApproveCheckDepositResponse = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `checkDeposit`                                                     | [components.CheckDeposit](../../models/components/checkdeposit.md) | :heavy_minus_sign:                                                 | OK                                                                 |
| `status`                                                           | [components.Status](../../models/components/status.md)             | :heavy_minus_sign:                                                 | INVALID_ARGUMENT: The request has an invalid argument.             |