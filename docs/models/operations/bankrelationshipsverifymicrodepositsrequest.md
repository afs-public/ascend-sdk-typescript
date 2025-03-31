# BankRelationshipsVerifyMicroDepositsRequest

## Example Usage

```typescript
import { BankRelationshipsVerifyMicroDepositsRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BankRelationshipsVerifyMicroDepositsRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  bankRelationshipId: "651ef9de0dee00240813e60e",
  verifyMicroDepositsRequestCreate: {
    amounts: {
      amount1: {},
      amount2: {},
    },
    name:
      "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The account id.                                                                                            | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                                 |
| `bankRelationshipId`                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The bankRelationship id.                                                                                   | 651ef9de0dee00240813e60e                                                                                   |
| `verifyMicroDepositsRequestCreate`                                                                         | [components.VerifyMicroDepositsRequestCreate](../../models/components/verifymicrodepositsrequestcreate.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |                                                                                                            |