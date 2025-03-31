# ActivityFpsl

Used to record the movements of shares to/ from the fpsl memo location and details related to the fpsl memo

## Example Usage

```typescript
import { ActivityFpsl } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityFpsl = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `action`                                                                       | [components.ActivityFpslAction](../../models/components/activityfpslaction.md) | :heavy_minus_sign:                                                             | Denotes whether the shares are incoming or outgoing                            | ALLOCATE                                                                       |