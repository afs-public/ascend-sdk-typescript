# CostBasisLotDisposalMethod

A method of determining the cost basis of an asset that has been sold or disposed of, by identifying which specific lot of the asset was sold and using the cost of that lot to calculate the cost basis; this method is commonly used for tax purposes to determine the amount of reportable capital gains or losses By default, this is set to `COST_BASIS_LOT_DISPOSAL_MIN_TAX_TERM`

## Example Usage

```typescript
import { CostBasisLotDisposalMethod } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CostBasisLotDisposalMethod =
  CostBasisLotDisposalMethod.CostBasisLotDisposalFifo;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                         | Value                                        |
| -------------------------------------------- | -------------------------------------------- |
| `CostBasisLotDisposalMethodUnspecified`      | COST_BASIS_LOT_DISPOSAL_METHOD_UNSPECIFIED   |
| `CostBasisLotDisposalFifo`                   | COST_BASIS_LOT_DISPOSAL_FIFO                 |
| `CostBasisLotDisposalLifo`                   | COST_BASIS_LOT_DISPOSAL_LIFO                 |
| `CostBasisLotDisposalHighCost`               | COST_BASIS_LOT_DISPOSAL_HIGH_COST            |
| `CostBasisLotDisposalHighCostLongTerm`       | COST_BASIS_LOT_DISPOSAL_HIGH_COST_LONG_TERM  |
| `CostBasisLotDisposalHighCostShortTerm`      | COST_BASIS_LOT_DISPOSAL_HIGH_COST_SHORT_TERM |
| `CostBasisLotDisposalLowCost`                | COST_BASIS_LOT_DISPOSAL_LOW_COST             |
| `CostBasisLotDisposalLowCostLongTerm`        | COST_BASIS_LOT_DISPOSAL_LOW_COST_LONG_TERM   |
| `CostBasisLotDisposalLowCostShortTerm`       | COST_BASIS_LOT_DISPOSAL_LOW_COST_SHORT_TERM  |
| `CostBasisLotDisposalMinTaxTerm`             | COST_BASIS_LOT_DISPOSAL_MIN_TAX_TERM         |
| -                                            | `Unrecognized<string>`                       |