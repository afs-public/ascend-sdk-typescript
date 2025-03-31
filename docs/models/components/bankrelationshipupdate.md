# BankRelationshipUpdate

A relationship between a bank account and an Apex account.

## Example Usage

```typescript
import { BankRelationshipUpdate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BankRelationshipUpdate = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `bankAccount`                                                                               | [components.BankAccountUpdate](../../models/components/bankaccountupdate.md)                | :heavy_minus_sign:                                                                          | A representation of a bank account.                                                         |                                                                                             |
| `nickname`                                                                                  | *string*                                                                                    | :heavy_minus_sign:                                                                          | The nickname of the bank relationship.                                                      | My Primary Bank                                                                             |
| `plaidProcessorToken`                                                                       | *string*                                                                                    | :heavy_minus_sign:                                                                          | A processor token from Plaid (vendor). Required if using `PLAID_TOKEN` verification method. | processor-sandbox-b03434a75-801-4000-990c-eb404cc                                           |