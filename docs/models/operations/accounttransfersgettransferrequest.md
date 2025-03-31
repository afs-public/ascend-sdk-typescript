# AccountTransfersGetTransferRequest

## Example Usage

```typescript
import { AccountTransfersGetTransferRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AccountTransfersGetTransferRequest = {
  correspondentId: "00000000-0000-0000-0000-000000000002",
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  transferId: "00000000-0000-0000-0000-000000000000",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `correspondentId`                    | *string*                             | :heavy_check_mark:                   | The correspondent id.                | 00000000-0000-0000-0000-000000000002 |
| `accountId`                          | *string*                             | :heavy_check_mark:                   | The account id.                      | 01H8FB90ZRRFWXB4XC2JPJ1D4Y           |
| `transferId`                         | *string*                             | :heavy_check_mark:                   | The transfer id.                     | 00000000-0000-0000-0000-000000000000 |