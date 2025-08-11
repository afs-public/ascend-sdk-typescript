# BankRelationshipsGetMicroDepositAmountsResponse

## Example Usage

```typescript
import { BankRelationshipsGetMicroDepositAmountsResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BankRelationshipsGetMicroDepositAmountsResponse = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `httpMeta`                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)               | :heavy_check_mark:                                                               | N/A                                                                              |
| `microDepositAmounts`                                                            | [components.MicroDepositAmounts](../../models/components/microdepositamounts.md) | :heavy_minus_sign:                                                               | OK                                                                               |
| `status`                                                                         | [components.Status](../../models/components/status.md)                           | :heavy_minus_sign:                                                               | INVALID_ARGUMENT: The request has an invalid argument.                           |