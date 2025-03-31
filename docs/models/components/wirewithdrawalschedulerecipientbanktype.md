# WireWithdrawalScheduleRecipientBankType

The type of bank identifier specified

## Example Usage

```typescript
import { WireWithdrawalScheduleRecipientBankType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: WireWithdrawalScheduleRecipientBankType =
  WireWithdrawalScheduleRecipientBankType.Bic;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `TypeUnspecified`      | TYPE_UNSPECIFIED       |
| `Aba`                  | ABA                    |
| `Bic`                  | BIC                    |
| -                      | `Unrecognized<string>` |