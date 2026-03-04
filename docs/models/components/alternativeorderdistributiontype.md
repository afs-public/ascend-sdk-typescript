# AlternativeOrderDistributionType

Identifies the distribution type for buy side orders (that is, when `side` value = `BUY`). - Orders will be rejected if the alternative investment asset does not allow the requested distribution type. - Not relevant for sell orders (that is, when `side` value = `SELL`). - Confirm the asset’s `cash_distribution_allowed` and `reinvestment_distribution_allowed` properties to know what it allows.

## Example Usage

```typescript
import { AlternativeOrderDistributionType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AlternativeOrderDistributionType =
  AlternativeOrderDistributionType.Cash;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                          | Value                         |
| ----------------------------- | ----------------------------- |
| `DistributionTypeUnspecified` | DISTRIBUTION_TYPE_UNSPECIFIED |
| `Cash`                        | CASH                          |
| `Reinvestment`                | REINVESTMENT                  |
| -                             | `Unrecognized<string>`        |