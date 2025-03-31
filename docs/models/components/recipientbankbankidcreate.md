# RecipientBankBankIdCreate

A bank identifier

## Example Usage

```typescript
import { RecipientBankBankIdCreate, RecipientBankBankIdCreateType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RecipientBankBankIdCreate = {
  id: "ABNANL2AXXX",
  type: RecipientBankBankIdCreateType.Bic,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The bank identifier                                                                                  | ABNANL2AXXX                                                                                          |
| `type`                                                                                               | [components.RecipientBankBankIdCreateType](../../models/components/recipientbankbankidcreatetype.md) | :heavy_check_mark:                                                                                   | The type of bank identifier specified                                                                | BIC                                                                                                  |