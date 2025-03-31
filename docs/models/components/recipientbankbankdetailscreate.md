# RecipientBankBankDetailsCreate

Bank details

## Example Usage

```typescript
import { RecipientBankBankDetailsCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RecipientBankBankDetailsCreate = {
  address: {},
  bankName: "ABN AMRO BANK N.V.",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `additionalInfo`                                                                                            | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Any additional information to be communicated to the recipient bank, such as intermediary banks to be used. | Jane Dough transfer through intermediary account                                                            |
| `address`                                                                                                   | [components.AddressCreate](../../models/components/addresscreate.md)                                        | :heavy_check_mark:                                                                                          | The data structure containing attributes describing the location of an underlying entity.                   |                                                                                                             |
| `bankName`                                                                                                  | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The name of the recipient bank / financial institution                                                      | ABN AMRO BANK N.V.                                                                                          |