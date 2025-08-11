# AchDepositsForceReturnAchDepositResponse

## Example Usage

```typescript
import { AchDepositsForceReturnAchDepositResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AchDepositsForceReturnAchDepositResponse = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `achDeposit`                                                       | [components.AchDeposit](../../models/components/achdeposit.md)     | :heavy_minus_sign:                                                 | OK                                                                 |
| `status`                                                           | [components.Status](../../models/components/status.md)             | :heavy_minus_sign:                                                 | INVALID_ARGUMENT: The request has an invalid argument.             |