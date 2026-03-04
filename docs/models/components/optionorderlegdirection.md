# OptionOrderLegDirection

The computed direction for this leg. When `side` is BUY, `direction` will be DEBIT. When `side` is SELL, `direction` will be CREDIT.

## Example Usage

```typescript
import { OptionOrderLegDirection } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OptionOrderLegDirection = OptionOrderLegDirection.Credit;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                          | Value                         |
| ----------------------------- | ----------------------------- |
| `DebitCreditTypeUnspecified`  | DEBIT_CREDIT_TYPE_UNSPECIFIED |
| `Debit`                       | DEBIT                         |
| `Credit`                      | CREDIT                        |
| -                             | `Unrecognized<string>`        |