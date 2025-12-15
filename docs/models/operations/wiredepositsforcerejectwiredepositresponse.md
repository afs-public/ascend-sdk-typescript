# WireDepositsForceRejectWireDepositResponse

## Example Usage

```typescript
import { WireDepositsForceRejectWireDepositResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: WireDepositsForceRejectWireDepositResponse = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `wireDeposit`                                                      | [components.WireDeposit](../../models/components/wiredeposit.md)   | :heavy_minus_sign:                                                 | OK                                                                 |
| `status`                                                           | [components.Status](../../models/components/status.md)             | :heavy_minus_sign:                                                 | INVALID_ARGUMENT: The request has an invalid argument.             |