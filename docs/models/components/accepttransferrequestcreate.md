# AcceptTransferRequestCreate

Request to accept internal Ascend transfers.

## Example Usage

```typescript
import { AcceptTransferRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AcceptTransferRequestCreate = {
  name:
    "correspondents/00000000-0000-0000-0000-000000000002/accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/transfers/00000000-0000-0000-0000-000000000000",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `comment`                                                                                                                              | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | Comment to add to the transfer record's audit trail.                                                                                   | Transfer was accepted for a reason.                                                                                                    |
| `name`                                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The name of the transfer to accept. Format: correspondents/{correspondent_id}/accounts/{account_id}/transfers/{transfer_id}            | correspondents/00000000-0000-0000-0000-000000000002/accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/transfers/00000000-0000-0000-0000-000000000000 |