# BankAccountCreateType

The bank account type.

## Example Usage

```typescript
import { BankAccountCreateType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BankAccountCreateType = BankAccountCreateType.Checking;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `TypeUnspecified`      | TYPE_UNSPECIFIED       |
| `Checking`             | CHECKING               |
| `Savings`              | SAVINGS                |
| -                      | `Unrecognized<string>` |