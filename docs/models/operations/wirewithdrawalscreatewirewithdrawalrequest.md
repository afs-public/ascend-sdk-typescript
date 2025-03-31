# WireWithdrawalsCreateWireWithdrawalRequest

## Example Usage

```typescript
import { RecipientBankBankIdCreateType } from "@apexfintechsolutions/ascend-sdk/models/components";
import { WireWithdrawalsCreateWireWithdrawalRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: WireWithdrawalsCreateWireWithdrawalRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  wireWithdrawalCreate: {
    beneficiary: {
      account: "73849218650987",
    },
    clientTransferId: "ABC-123",
    recipientBank: {
      bankId: {
        id: "ABNANL2AXXX",
        type: RecipientBankBankIdCreateType.Bic,
      },
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `accountId`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | The account id.                                                                    | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                         |
| `wireWithdrawalCreate`                                                             | [components.WireWithdrawalCreate](../../models/components/wirewithdrawalcreate.md) | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |