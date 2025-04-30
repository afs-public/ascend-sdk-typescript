# YieldRecord

Contains details about the yields associated with a trade in fixed income instruments

## Example Usage

```typescript
import { YieldRecord } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: YieldRecord = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `yieldPercent`                                                                     | [components.YieldPercent](../../models/components/yieldpercent.md)                 | :heavy_minus_sign:                                                                 | The yield percentage at which the transaction was effected                         | {<br/>"value": "0.25"<br/>}                                                        |
| `yieldType`                                                                        | [components.YieldRecordYieldType](../../models/components/yieldrecordyieldtype.md) | :heavy_minus_sign:                                                                 | Characterization of a yield percentage                                             | YIELD_TO_CALL                                                                      |