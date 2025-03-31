# IctWithdrawalEntityOriginatingParty

An entity originating party

## Example Usage

```typescript
import { IctWithdrawalEntityOriginatingParty } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: IctWithdrawalEntityOriginatingParty = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `address`                                                                          | [components.IctWithdrawalAddress](../../models/components/ictwithdrawaladdress.md) | :heavy_minus_sign:                                                                 | The address of the entity                                                          |                                                                                    |
| `taxId`                                                                            | *string*                                                                           | :heavy_minus_sign:                                                                 | The tax identification number of the entity                                        | 987-65-4321                                                                        |
| `title`                                                                            | *string*                                                                           | :heavy_minus_sign:                                                                 | The name of the entity                                                             | Acme, Inc.                                                                         |