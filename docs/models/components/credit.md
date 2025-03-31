# Credit

Used to disburse funds into a customer's account, typically for purposes such as refunds, interest payments, or rewards from enrolled programs and details related to the credit

## Example Usage

```typescript
import { Credit } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Credit = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `additionalInstructions`                                                  | *string*                                                                  | :heavy_minus_sign:                                                        | Free form text field providing additional information about a transaction | FDIC sweep interest payment                                               |
| `creditType`                                                              | [components.CreditType](../../models/components/credittype.md)            | :heavy_minus_sign:                                                        | Provides more details on the type of credit                               | WRITE_OFF                                                                 |
| `taxable`                                                                 | *boolean*                                                                 | :heavy_minus_sign:                                                        | Indicates whether the credit is taxable                                   | false                                                                     |