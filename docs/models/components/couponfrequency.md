# CouponFrequency

Frequency of payments

## Example Usage

```typescript
import { CouponFrequency } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CouponFrequency = CouponFrequency.Annual;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                         | Value                        |
| ---------------------------- | ---------------------------- |
| `CouponFrequencyUnspecified` | COUPON_FREQUENCY_UNSPECIFIED |
| `SemiAnnual`                 | SEMI_ANNUAL                  |
| `Monthly`                    | MONTHLY                      |
| `AtMaturity`                 | AT_MATURITY                  |
| `Zero`                       | ZERO                         |
| `Quarterly`                  | QUARTERLY                    |
| `Annual`                     | ANNUAL                       |
| -                            | `Unrecognized<string>`       |