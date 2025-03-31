# RecipientBank

The recipient bank / financial institution

## Example Usage

```typescript
import { RecipientBank } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RecipientBank = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `bankId`                                                                                   | [components.BankId](../../models/components/bankid.md)                                     | :heavy_minus_sign:                                                                         | An identifier that represents ABA routing number for domestic wire or BIC for foreign wire |
| `internationalBankDetails`                                                                 | [components.InternationalBankDetails](../../models/components/internationalbankdetails.md) | :heavy_minus_sign:                                                                         | Bank details required in the case of an international wire transfer                        |