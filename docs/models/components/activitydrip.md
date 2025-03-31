# ActivityDrip

Used to record the movement of funds to/ from the pending_drip memo location

## Example Usage

```typescript
import { ActivityDrip } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityDrip = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `action`                                                                       | [components.ActivityDripAction](../../models/components/activitydripaction.md) | :heavy_minus_sign:                                                             | Denotes whether the reinvestment is pending or complete                        | DRIP_PENDING                                                                   |