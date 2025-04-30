# BookingCancelTradeAllocationRequest

## Example Usage

```typescript
import { BookingCancelTradeAllocationRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BookingCancelTradeAllocationRequest = {
  accountId: "02HASWB2DTMRT3DAM45P56J2T2",
  tradeAllocationId: "01J0XX2KDN3M9QKFKRE2HYSCQM",
  cancelTradeAllocationRequestCreate: {
    name:
      "accounts/02HASWB2DTMRT3DAM45P56J2T2/tradeAllocations/01J0XX2KDN3M9QKFKRE2HYSCQM",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The account id.                                                                                                | 02HASWB2DTMRT3DAM45P56J2T2                                                                                     |
| `tradeAllocationId`                                                                                            | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The tradeAllocation id.                                                                                        | 01J0XX2KDN3M9QKFKRE2HYSCQM                                                                                     |
| `cancelTradeAllocationRequestCreate`                                                                           | [components.CancelTradeAllocationRequestCreate](../../models/components/canceltradeallocationrequestcreate.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |