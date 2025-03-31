# CancelBankRelationshipRequestCreate

Request to cancel an existing bank relationship.

## Example Usage

```typescript
import { CancelBankRelationshipRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelBankRelationshipRequestCreate = {
  comment: "User Request",
  name:
    "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `comment`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | Comment when canceling the bank relationship.                                  | User Request                                                                   |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | The name of the bank relationship to be canceled.                              | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e |