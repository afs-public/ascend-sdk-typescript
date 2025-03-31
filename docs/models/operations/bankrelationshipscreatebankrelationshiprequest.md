# BankRelationshipsCreateBankRelationshipRequest

## Example Usage

```typescript
import { VerificationMethod } from "@apexfintechsolutions/ascend-sdk/models/components";
import { BankRelationshipsCreateBankRelationshipRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BankRelationshipsCreateBankRelationshipRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  bankRelationshipCreate: {
    nickname: "My Primary Bank",
    verificationMethod: VerificationMethod.MicroDeposit,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `accountId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | The account id.                                                                        | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                             |
| `bankRelationshipCreate`                                                               | [components.BankRelationshipCreate](../../models/components/bankrelationshipcreate.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |