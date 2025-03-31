# BankId

An identifier that represents ABA routing number for domestic wire or BIC for foreign wire

## Example Usage

```typescript
import { BankId } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BankId = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                     | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The bank identifier                                                                                                      | ABNANL2AXXX                                                                                                              |
| `type`                                                                                                                   | [components.WireWithdrawalScheduleRecipientBankType](../../models/components/wirewithdrawalschedulerecipientbanktype.md) | :heavy_minus_sign:                                                                                                       | The type of bank identifier specified                                                                                    | BIC                                                                                                                      |