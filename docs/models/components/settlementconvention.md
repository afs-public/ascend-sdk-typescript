# SettlementConvention

Specifies the timeline for settling a transaction

## Example Usage

```typescript
import { SettlementConvention } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: SettlementConvention = SettlementConvention.TPlus1;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                              | Value                             |
| --------------------------------- | --------------------------------- |
| `SettlementConventionUnspecified` | SETTLEMENT_CONVENTION_UNSPECIFIED |
| `TPlus0`                          | T_PLUS_0                          |
| `TPlus1`                          | T_PLUS_1                          |
| -                                 | `Unrecognized<string>`            |