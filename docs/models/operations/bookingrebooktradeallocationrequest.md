# BookingRebookTradeAllocationRequest

## Example Usage

```typescript
import { ToSide, TradeAllocationCreateBrokerCapacity, TradeAllocationCreateIdentifierType } from "@apexfintechsolutions/ascend-sdk/models/components";
import { BookingRebookTradeAllocationRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BookingRebookTradeAllocationRequest = {
  accountId: "02HASWB2DTMRT3DAM45P56J2T2",
  tradeAllocationId: "01J0XX2KDN3M9QKFKRE2HYSCQM",
  rebookTradeAllocationRequestCreate: {
    name:
      "accounts/02HASWB2DTMRT3DAM45P56J2T2/tradeAllocations/01J0XX2KDN3M9QKFKRE2HYSCQM",
    requestId: "8a0d35c0-428c-439e-9b03-b611530fe06f",
    tradeAllocation: {
      brokerCapacity: TradeAllocationCreateBrokerCapacity.Agency,
      executionTime: new Date("2024-07-17T12:00:00Z"),
      fromAccountId: "01HASWB2DTMRT3DAM45P56J2H3",
      identifier: "AAPL",
      identifierType: TradeAllocationCreateIdentifierType.Symbol,
      price: {},
      quantity: {},
      sourceApplication: "Trading-App",
      toAccountId: "02HASWB2DTMRT3DAM45P56J2T2",
      toSide: ToSide.Buy,
    },
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The account id.                                                                                                | 02HASWB2DTMRT3DAM45P56J2T2                                                                                     |
| `tradeAllocationId`                                                                                            | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The tradeAllocation id.                                                                                        | 01J0XX2KDN3M9QKFKRE2HYSCQM                                                                                     |
| `rebookTradeAllocationRequestCreate`                                                                           | [components.RebookTradeAllocationRequestCreate](../../models/components/rebooktradeallocationrequestcreate.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |