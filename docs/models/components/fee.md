# Fee

## Example Usage

```typescript
import { Fee } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Fee = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `amount`                                                     | [components.FeeAmount](../../models/components/feeamount.md) | :heavy_minus_sign:                                           | Monetary amount associated with the fee                      | {<br/>"value": "0.25"<br/>}                                  |
| `type`                                                       | [components.FeeType](../../models/components/feetype.md)     | :heavy_minus_sign:                                           | The type of fee being assessed                               | LIQUIDITY                                                    |