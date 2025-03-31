# WireWithdrawalRecipientBankCreate

A recipient bank / financial institution

## Example Usage

```typescript
import { RecipientBankBankIdCreateType, WireWithdrawalRecipientBankCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: WireWithdrawalRecipientBankCreate = {
  bankId: {
    id: "ABNANL2AXXX",
    type: RecipientBankBankIdCreateType.Bic,
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `bankId`                                                                                               | [components.RecipientBankBankIdCreate](../../models/components/recipientbankbankidcreate.md)           | :heavy_check_mark:                                                                                     | A bank identifier                                                                                      |
| `internationalBankDetails`                                                                             | [components.RecipientBankBankDetailsCreate](../../models/components/recipientbankbankdetailscreate.md) | :heavy_minus_sign:                                                                                     | Bank details                                                                                           |