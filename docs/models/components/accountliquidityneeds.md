# AccountLiquidityNeeds

An investor’s short-term cash requirements or the need to access funds quickly; it is important to consider an investor’s liquidity needs to ensure that they have sufficient cash or easily liquidated assets available to meet their financial obligations - this may include holding cash or cash equivalents

## Example Usage

```typescript
import { AccountLiquidityNeeds } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AccountLiquidityNeeds = AccountLiquidityNeeds.VeryImportant;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `LiquidityNeedsUnspecified` | LIQUIDITY_NEEDS_UNSPECIFIED |
| `VeryImportant`             | VERY_IMPORTANT              |
| `SomewhatImportant`         | SOMEWHAT_IMPORTANT          |
| `NotImportant`              | NOT_IMPORTANT               |
| -                           | `Unrecognized<string>`      |