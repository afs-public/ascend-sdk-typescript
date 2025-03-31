# MarkAbsenceReason

When marks are found and returned, this will be unspecified. If the asset was found, but no pricing data is returned, then: this will denote the reason, the marks[] list will be empty, and the accrued_interest_amount will not be present.

## Example Usage

```typescript
import { MarkAbsenceReason } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: MarkAbsenceReason = MarkAbsenceReason.NotPriced;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                            | Value                           |
| ------------------------------- | ------------------------------- |
| `MarkAbsenceReasonUnspecified`  | MARK_ABSENCE_REASON_UNSPECIFIED |
| `NotPriced`                     | NOT_PRICED                      |
| `NotTradable`                   | NOT_TRADABLE                    |
| -                               | `Unrecognized<string>`          |