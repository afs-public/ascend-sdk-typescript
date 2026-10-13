# IneligibleHolding

IneligibleHolding is a holding that can't transfer, with the reason(s) why.

## Example Usage

```typescript
import { IneligibleHolding } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: IneligibleHolding = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `failures`                                                                                           | [components.AcatsAssetFailure](../../models/components/acatsassetfailure.md)[]                       | :heavy_minus_sign:                                                                                   | Why the holding is ineligible; at least one entry.                                                   |
| `holding`                                                                                            | [components.AcatsIneligibleHoldingHolding](../../models/components/acatsineligibleholdingholding.md) | :heavy_minus_sign:                                                                                   | The holding.                                                                                         |