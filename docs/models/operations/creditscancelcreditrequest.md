# CreditsCancelCreditRequest

## Example Usage

```typescript
import { CreditsCancelCreditRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: CreditsCancelCreditRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  creditId: "20230823123456",
  cancelCreditRequestCreate: {
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/credits/20230823123456",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `accountId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | The account id.                                                                              | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                   |
| `creditId`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | The credit id.                                                                               | 20230823123456                                                                               |
| `cancelCreditRequestCreate`                                                                  | [components.CancelCreditRequestCreate](../../models/components/cancelcreditrequestcreate.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |