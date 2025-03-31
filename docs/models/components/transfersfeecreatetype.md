# TransfersFeeCreateType

The type of the fee being charged

## Example Usage

```typescript
import { TransfersFeeCreateType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: TransfersFeeCreateType = TransfersFeeCreateType.Platform;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `TypeUnspecified`      | TYPE_UNSPECIFIED       |
| `Management`           | MANAGEMENT             |
| `Advisory`             | ADVISORY               |
| `Exchange`             | EXCHANGE               |
| `Platform`             | PLATFORM               |
| `Inactivity`           | INACTIVITY             |
| -                      | `Unrecognized<string>` |