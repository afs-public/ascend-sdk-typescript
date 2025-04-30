# SettlementStyle

Indicates whether the option is designated to settle at the market's opening price on the expiration date.

## Example Usage

```typescript
import { SettlementStyle } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: SettlementStyle = SettlementStyle.SettleOnOpen;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                         | Value                        |
| ---------------------------- | ---------------------------- |
| `SettlementStyleUnspecified` | SETTLEMENT_STYLE_UNSPECIFIED |
| `SettleOnOpen`               | SETTLE_ON_OPEN               |
| `SettleOnClose`              | SETTLE_ON_CLOSE              |
| -                            | `Unrecognized<string>`       |