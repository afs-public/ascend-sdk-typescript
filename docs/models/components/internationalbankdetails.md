# InternationalBankDetails

Bank details required in the case of an international wire transfer

## Example Usage

```typescript
import { InternationalBankDetails } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: InternationalBankDetails = {};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `additionalInfo`                                                                                                               | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Any additional information to be communicated to the recipient bank, such as intermediary banks to be used.                    | Jane Dough transfer through intermediary account                                                                               |
| `address`                                                                                                                      | [components.WireWithdrawalScheduleRecipientBankAddress](../../models/components/wirewithdrawalschedulerecipientbankaddress.md) | :heavy_minus_sign:                                                                                                             | The address of the recipient bank / financial institution                                                                      |                                                                                                                                |
| `bankName`                                                                                                                     | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The name of the recipient bank / financial institution                                                                         | ABN AMRO BANK N.V.                                                                                                             |