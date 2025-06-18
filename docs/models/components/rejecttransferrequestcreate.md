# RejectTransferRequestCreate

Request to reject internal Ascend transfers.

## Example Usage

```typescript
import { RejectTransferRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RejectTransferRequestCreate = {
  name:
    "correspondents/00000000-0000-0000-0000-000000000002/accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/transfers/00000000-0000-0000-0000-000000000000",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `comment`                                                                                                                              | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | Comment to add to the transfer resource's audit trail                                                                                  | Rejected by John Smith for ticket                                                                                                      |
| `name`                                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The name of the transfer to reject Format: correspondents/{correspondent_id}/accounts/{account_id}/transfers/{transfer_id}             | correspondents/00000000-0000-0000-0000-000000000002/accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/transfers/00000000-0000-0000-0000-000000000000 |
| `stateReason`                                                                                                                          | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | The reason for the rejection to add to the the transfer resource's audit trail                                                         | Account violates credit policy of receiving firm.                                                                                      |