# OtherAccountsCreate

A customer-disclosed list of other Apex-held accounts owned by the Entity applicant at the time of this account's application; expressed as zero, one, or many account numbers

## Example Usage

```typescript
import { OtherAccountsCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OtherAccountsCreate = {
  ownerHasOtherAccountsAtApex: true,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `accountNames`                       | *string*[]                           | :heavy_minus_sign:                   | Other account names held at Apex     | [<br/>"John Doe Trading"<br/>]       |
| `accountNumbers`                     | *string*[]                           | :heavy_minus_sign:                   | Other account numbers held at Apex   | [<br/>"N6D8ZJP"<br/>]                |
| `ownerHasOtherAccountsAtApex`        | *boolean*                            | :heavy_check_mark:                   | The owner has other accounts at Apex | true                                 |