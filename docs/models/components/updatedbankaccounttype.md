# UpdatedBankAccountType

The updated bank account type. Should only be set when the code is for an incorrect transaction code.

## Example Usage

```typescript
import { UpdatedBankAccountType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: UpdatedBankAccountType = UpdatedBankAccountType.Savings;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `TypeUnspecified`      | TYPE_UNSPECIFIED       |
| `Checking`             | CHECKING               |
| `Savings`              | SAVINGS                |
| -                      | `Unrecognized<string>` |