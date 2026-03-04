# OptionOrderPriceDirection

The direction of the price, which indicates whether the entire option order should result in a credit to the account placing the order, or a debit from the account placing the order.

## Example Usage

```typescript
import { OptionOrderPriceDirection } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OptionOrderPriceDirection = OptionOrderPriceDirection.Credit;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                          | Value                         |
| ----------------------------- | ----------------------------- |
| `DebitCreditTypeUnspecified`  | DEBIT_CREDIT_TYPE_UNSPECIFIED |
| `Debit`                       | DEBIT                         |
| `Credit`                      | CREDIT                        |
| -                             | `Unrecognized<string>`        |