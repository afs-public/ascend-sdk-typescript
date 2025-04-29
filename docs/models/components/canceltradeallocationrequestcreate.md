# CancelTradeAllocationRequestCreate

A request for canceling a trade allocation.

## Example Usage

```typescript
import { CancelTradeAllocationRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelTradeAllocationRequestCreate = {
  name:
    "accounts/02HASWB2DTMRT3DAM45P56J2T2/tradeAllocations/01J0XX2KDN3M9QKFKRE2HYSCQM",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `name`                                                                          | *string*                                                                        | :heavy_check_mark:                                                              | The name of the trade allocation to cancel.                                     | accounts/02HASWB2DTMRT3DAM45P56J2T2/tradeAllocations/01J0XX2KDN3M9QKFKRE2HYSCQM |