# FundingType

Describes if the account is cash-only or has access to a form of margin

## Example Usage

```typescript
import { FundingType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: FundingType = FundingType.Cash;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                     | Value                    |
| ------------------------ | ------------------------ |
| `FundingTypeUnspecified` | FUNDING_TYPE_UNSPECIFIED |
| `Cash`                   | CASH                     |
| `MarginLimitedPurpose`   | MARGIN_LIMITED_PURPOSE   |
| `MarginRegT`             | MARGIN_REG_T             |
| `MarginPortfolio`        | MARGIN_PORTFOLIO         |
| -                        | `Unrecognized<string>`   |