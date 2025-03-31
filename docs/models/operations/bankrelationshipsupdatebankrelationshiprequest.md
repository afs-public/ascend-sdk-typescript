# BankRelationshipsUpdateBankRelationshipRequest

## Example Usage

```typescript
import { BankRelationshipsUpdateBankRelationshipRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BankRelationshipsUpdateBankRelationshipRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  bankRelationshipId: "651ef9de0dee00240813e60e",
  bankRelationshipUpdate: {},
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `accountId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | The account id.                                                                        | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                             |
| `bankRelationshipId`                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | The bankRelationship id.                                                               | 651ef9de0dee00240813e60e                                                               |
| `updateMask`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | The field of the bank relationship to update. Only `nickname` is supported.            | {<br/>"update_mask": {<br/>"paths": [<br/>"nickname"<br/>]<br/>}<br/>}                 |
| `bankRelationshipUpdate`                                                               | [components.BankRelationshipUpdate](../../models/components/bankrelationshipupdate.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |