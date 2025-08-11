# AchWithdrawalsCreateAchWithdrawalResponse

## Example Usage

```typescript
import { AchWithdrawalsCreateAchWithdrawalResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AchWithdrawalsCreateAchWithdrawalResponse = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `httpMeta`                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)   | :heavy_check_mark:                                                   | N/A                                                                  |
| `achWithdrawal`                                                      | [components.AchWithdrawal](../../models/components/achwithdrawal.md) | :heavy_minus_sign:                                                   | OK                                                                   |
| `status`                                                             | [components.Status](../../models/components/status.md)               | :heavy_minus_sign:                                                   | INVALID_ARGUMENT: The request has an invalid argument.               |