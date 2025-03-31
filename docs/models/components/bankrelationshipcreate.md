# BankRelationshipCreate

A relationship between a bank account and an Apex account.

## Example Usage

```typescript
import { BankRelationshipCreate, VerificationMethod } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BankRelationshipCreate = {
  nickname: "My Primary Bank",
  verificationMethod: VerificationMethod.MicroDeposit,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `bankAccount`                                                                               | [components.BankAccountCreate](../../models/components/bankaccountcreate.md)                | :heavy_minus_sign:                                                                          | A representation of a bank account.                                                         |                                                                                             |
| `nickname`                                                                                  | *string*                                                                                    | :heavy_check_mark:                                                                          | The nickname of the bank relationship.                                                      | My Primary Bank                                                                             |
| `plaidProcessorToken`                                                                       | *string*                                                                                    | :heavy_minus_sign:                                                                          | A processor token from Plaid (vendor). Required if using `PLAID_TOKEN` verification method. | processor-sandbox-b03434a75-801-4000-990c-eb404cc                                           |
| `verificationMethod`                                                                        | [components.VerificationMethod](../../models/components/verificationmethod.md)              | :heavy_check_mark:                                                                          | The verification method of the bank relationship.                                           | MICRO_DEPOSIT                                                                               |