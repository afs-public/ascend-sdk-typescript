# SettlementType

Indicates whether an option follows Standard settlement terms or has Non-Standard terms, often due to adjustments like corporate actions.

## Example Usage

```typescript
import { SettlementType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: SettlementType = SettlementType.Standard;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `SettlementTypeUnspecified` | SETTLEMENT_TYPE_UNSPECIFIED |
| `Standard`                  | STANDARD                    |
| `NonStandard`               | NON_STANDARD                |
| -                           | `Unrecognized<string>`      |