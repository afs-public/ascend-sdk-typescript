# CommissionCreateType

The type of commission value being specified. Only the type of "AMOUNT" is supported.

## Example Usage

```typescript
import { CommissionCreateType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CommissionCreateType = CommissionCreateType.Amount;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `CommissionTypeUnspecified` | COMMISSION_TYPE_UNSPECIFIED |
| `Amount`                    | AMOUNT                      |
| -                           | `Unrecognized<string>`      |