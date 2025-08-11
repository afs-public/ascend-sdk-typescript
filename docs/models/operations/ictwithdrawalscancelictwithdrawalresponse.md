# IctWithdrawalsCancelIctWithdrawalResponse

## Example Usage

```typescript
import { IctWithdrawalsCancelIctWithdrawalResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: IctWithdrawalsCancelIctWithdrawalResponse = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `httpMeta`                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)   | :heavy_check_mark:                                                   | N/A                                                                  |
| `ictWithdrawal`                                                      | [components.IctWithdrawal](../../models/components/ictwithdrawal.md) | :heavy_minus_sign:                                                   | OK                                                                   |
| `status`                                                             | [components.Status](../../models/components/status.md)               | :heavy_minus_sign:                                                   | INVALID_ARGUMENT: The request has an invalid argument.               |