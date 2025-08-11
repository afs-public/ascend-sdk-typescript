# WireWithdrawalsCancelWireWithdrawalResponse

## Example Usage

```typescript
import { WireWithdrawalsCancelWireWithdrawalResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: WireWithdrawalsCancelWireWithdrawalResponse = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `httpMeta`                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)     | :heavy_check_mark:                                                     | N/A                                                                    |
| `wireWithdrawal`                                                       | [components.WireWithdrawal](../../models/components/wirewithdrawal.md) | :heavy_minus_sign:                                                     | OK                                                                     |
| `status`                                                               | [components.Status](../../models/components/status.md)                 | :heavy_minus_sign:                                                     | INVALID_ARGUMENT: The request has an invalid argument.                 |