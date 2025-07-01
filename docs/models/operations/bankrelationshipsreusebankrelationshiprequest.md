# BankRelationshipsReuseBankRelationshipRequest

## Example Usage

```typescript
import { BankRelationshipsReuseBankRelationshipRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BankRelationshipsReuseBankRelationshipRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Z",
  reuseBankRelationshipRequestCreate: {
    parent: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Z",
    sourceBankRelationship:
      "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The account id.                                                                                                | 01H8FB90ZRRFWXB4XC2JPJ1D4Z                                                                                     |
| `reuseBankRelationshipRequestCreate`                                                                           | [components.ReuseBankRelationshipRequestCreate](../../models/components/reusebankrelationshiprequestcreate.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |