# EnrollmentDepositedFunds

The initial amount of money placed into the account by the entity upon or after the account's establishment.

## Example Usage

```typescript
import { EnrollmentDepositedFunds } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EnrollmentDepositedFunds = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `initialDepositAmount`                                                                                 | [components.EnrollmentInitialDepositAmount](../../models/components/enrollmentinitialdepositamount.md) | :heavy_minus_sign:                                                                                     | The initial deposit amount in USD                                                                      | 234.34                                                                                                 |
| `initialDepositSource`                                                                                 | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The source of the initial deposit                                                                      | Product Revenue                                                                                        |