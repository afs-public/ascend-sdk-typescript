# ActivityCredit

Used to disburse funds into a customer's account, typically for purposes such as refunds, interest payments, or rewards from enrolled programs and details related to the credit

## Example Usage

```typescript
import { ActivityCredit } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityCredit = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `additionalInstructions`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | Free form text field providing additional information about a transaction      | FDIC sweep interest payment                                                    |
| `creditType`                                                                   | [components.ActivityCreditType](../../models/components/activitycredittype.md) | :heavy_minus_sign:                                                             | Further detail describing the type of credit                                   | WRITE_OFF                                                                      |
| `taxable`                                                                      | *boolean*                                                                      | :heavy_minus_sign:                                                             | No longer applicable                                                           | false                                                                          |