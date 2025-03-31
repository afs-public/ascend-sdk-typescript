# ActivityWithholding

Used to record tax withholdings and details related to the withholding

## Example Usage

```typescript
import { ActivityWithholding } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityWithholding = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `data`                                                                              | [components.WithholdingData](../../models/components/withholdingdata.md)[]          | :heavy_minus_sign:                                                                  | Contains information about the tax withholdings associated with a 'parent' activity |