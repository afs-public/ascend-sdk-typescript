# WireWithdrawalIntermediary

The intermediary party

## Example Usage

```typescript
import { WireWithdrawalIntermediary } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: WireWithdrawalIntermediary = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `account`                                                                                                    | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The account number of the intermediary party                                                                 | NL02ABNA0123456789                                                                                           |
| `accountTitle`                                                                                               | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The name of the intermediary party                                                                           | Jane Dough                                                                                                   |
| `address`                                                                                                    | [components.WireWithdrawalIntermediaryAddress](../../models/components/wirewithdrawalintermediaryaddress.md) | :heavy_minus_sign:                                                                                           | The address of the intermediary party                                                                        |                                                                                                              |