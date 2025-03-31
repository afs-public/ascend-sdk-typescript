# BankRelationshipsCancelBankRelationshipRequest

## Example Usage

```typescript
import { BankRelationshipsCancelBankRelationshipRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BankRelationshipsCancelBankRelationshipRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  bankRelationshipId: "651ef9de0dee00240813e60e",
  cancelBankRelationshipRequestCreate: {
    comment: "User Request",
    name:
      "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The account id.                                                                                                  | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                                       |
| `bankRelationshipId`                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The bankRelationship id.                                                                                         | 651ef9de0dee00240813e60e                                                                                         |
| `cancelBankRelationshipRequestCreate`                                                                            | [components.CancelBankRelationshipRequestCreate](../../models/components/cancelbankrelationshiprequestcreate.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |