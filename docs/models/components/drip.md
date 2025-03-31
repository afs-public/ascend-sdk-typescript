# Drip

Used to record the movement of funds to/ from the pending_drip memo location

## Example Usage

```typescript
import { Drip } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Drip = {};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 | Example                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                                    | [components.EntryAction](../../models/components/entryaction.md)                                                                            | :heavy_minus_sign:                                                                                                                          | Indicates whether the drip memo activity is reserving cash (DRIP_PENDING) or removing the reservation after a successful reinvestment trade | DRIP_PENDING                                                                                                                                |