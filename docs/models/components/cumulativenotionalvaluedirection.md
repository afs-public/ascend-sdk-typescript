# CumulativeNotionalValueDirection

This represents the direction of the total filled notional value, which will be present if the `cumulative_notional_value` is also present. If there are no executions, this value will be absent. When the summed notional value of all CREDIT legs exceeds that of the DEBIT legs a CREDIT will be reported here; otherwise a DEBIT will be reported.

## Example Usage

```typescript
import { CumulativeNotionalValueDirection } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CumulativeNotionalValueDirection =
  CumulativeNotionalValueDirection.Credit;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                          | Value                         |
| ----------------------------- | ----------------------------- |
| `DebitCreditTypeUnspecified`  | DEBIT_CREDIT_TYPE_UNSPECIFIED |
| `Debit`                       | DEBIT                         |
| `Credit`                      | CREDIT                        |
| -                             | `Unrecognized<string>`        |