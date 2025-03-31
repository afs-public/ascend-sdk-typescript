# WireWithdrawalBankId

An identifier that represents ABA routing number for domestic wire or BIC for foreign wire

## Example Usage

```typescript
import { WireWithdrawalBankId } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: WireWithdrawalBankId = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The bank identifier                                                                                      | ABNANL2AXXX                                                                                              |
| `type`                                                                                                   | [components.WireWithdrawalRecipientBankType](../../models/components/wirewithdrawalrecipientbanktype.md) | :heavy_minus_sign:                                                                                       | The type of bank identifier specified                                                                    | BIC                                                                                                      |