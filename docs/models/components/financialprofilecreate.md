# FinancialProfileCreate

Disclosure of the entity account owner's financial relationships and source of brokerage funds; facilitates the creation of the overall customer risk profile

## Example Usage

```typescript
import { FinancialProfileCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: FinancialProfileCreate = {
  bankingRelationships: [
    "<value>",
  ],
  otherAccounts: {
    ownerHasOtherAccountsAtApex: true,
  },
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `bankingRelationships`                                                                                                                                                         | *string*[]                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                             | Bank names with whom the entity maintains a relationship with (e.g., accounts held with the bank)                                                                              |                                                                                                                                                                                |
| `otherAccounts`                                                                                                                                                                | [components.OtherAccountsCreate](../../models/components/otheraccountscreate.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | A customer-disclosed list of other Apex-held accounts owned by the Entity applicant at the time of this account's application; expressed as zero, one, or many account numbers |                                                                                                                                                                                |
| `primarySourceOfDepositedFunds`                                                                                                                                                | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The primary source of funds that will be deposited to this account                                                                                                             | Corporate Income                                                                                                                                                               |