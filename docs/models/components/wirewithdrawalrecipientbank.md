# WireWithdrawalRecipientBank

The recipient bank / financial institution

## Example Usage

```typescript
import { WireWithdrawalRecipientBank } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: WireWithdrawalRecipientBank = {};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `bankId`                                                                                                               | [components.WireWithdrawalBankId](../../models/components/wirewithdrawalbankid.md)                                     | :heavy_minus_sign:                                                                                                     | An identifier that represents ABA routing number for domestic wire or BIC for foreign wire                             |
| `internationalBankDetails`                                                                                             | [components.WireWithdrawalInternationalBankDetails](../../models/components/wirewithdrawalinternationalbankdetails.md) | :heavy_minus_sign:                                                                                                     | Bank details required in the case of an international wire transfer                                                    |