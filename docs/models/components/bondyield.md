# BondYield

A percentage yield

## Example Usage

```typescript
import { BondYield } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BondYield = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `percent`                                                                      | [components.Percent](../../models/components/percent.md)                       | :heavy_minus_sign:                                                             | The percentage yield.                                                          | {<br/>"value": "25.00"<br/>}                                                   |
| `yieldType`                                                                    | [components.BondYieldYieldType](../../models/components/bondyieldyieldtype.md) | :heavy_minus_sign:                                                             | The type of yield.                                                             | YIELD_TO_MATURITY                                                              |