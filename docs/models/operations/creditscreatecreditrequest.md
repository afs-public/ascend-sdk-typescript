# CreditsCreateCreditRequest

## Example Usage

```typescript
import { TransfersCreditCreateType } from "@apexfintechsolutions/ascend-sdk/models/components";
import { CreditsCreateCreditRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: CreditsCreateCreditRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  transfersCreditCreate: {
    amount: {},
    clientTransferId: "179dcd33-49f8-4615-989c-560fb387c4fd",
    type: TransfersCreditCreateType.Promotional,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accountId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | The account id.                                                                      | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                           |
| `transfersCreditCreate`                                                              | [components.TransfersCreditCreate](../../models/components/transferscreditcreate.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |