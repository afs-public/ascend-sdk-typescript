# ReuseBankRelationshipRequestCreate

Request to reuse a bank relationship.

## Example Usage

```typescript
import { ReuseBankRelationshipRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ReuseBankRelationshipRequestCreate = {
  parent: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Z",
  sourceBankRelationship:
    "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e",
};
```

## Fields

| Field                                                                                                                                                                       | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 | Example                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `parent`                                                                                                                                                                    | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | The account to create the reused bank relationship under. The account must be related to the parent account of the `source_bank_relationship`. Format: `accounts/{account}` | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Z                                                                                                                                         |
| `sourceBankRelationship`                                                                                                                                                    | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | The source bank relationship to reuse. The bank relationship must be in an approved state. Format: `accounts/{account}/bankRelationships/{bank_relationship}`               | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e                                                                                              |