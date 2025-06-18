# AccountTransfersAcceptTransferRequest

## Example Usage

```typescript
import { AccountTransfersAcceptTransferRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AccountTransfersAcceptTransferRequest = {
  correspondentId: "00000000-0000-0000-0000-000000000002",
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  transferId: "00000000-0000-0000-0000-000000000000",
  acceptTransferRequestCreate: {
    name:
      "correspondents/00000000-0000-0000-0000-000000000002/accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/transfers/00000000-0000-0000-0000-000000000000",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `correspondentId`                                                                                | *string*                                                                                         | :heavy_check_mark:                                                                               | The correspondent id.                                                                            | 00000000-0000-0000-0000-000000000002                                                             |
| `accountId`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | The account id.                                                                                  | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                       |
| `transferId`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | The transfer id.                                                                                 | 00000000-0000-0000-0000-000000000000                                                             |
| `acceptTransferRequestCreate`                                                                    | [components.AcceptTransferRequestCreate](../../models/components/accepttransferrequestcreate.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |