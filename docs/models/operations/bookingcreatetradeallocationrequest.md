# BookingCreateTradeAllocationRequest

## Example Usage

```typescript
import { ToSide, TradeAllocationCreateBrokerCapacity, TradeAllocationCreateIdentifierType } from "@apexfintechsolutions/ascend-sdk/models/components";
import { BookingCreateTradeAllocationRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BookingCreateTradeAllocationRequest = {
  accountId: "01FAKEACCOUNT1TYKWEYRH8S2K",
  tradeAllocationCreate: {
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
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                                 | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | The account id.                                                                                                             | 01FAKEACCOUNT1TYKWEYRH8S2K                                                                                                  |
| `requestId`                                                                                                                 | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | A globally unique UUID that is specific to the request. This id is used to prevent duplicate requests from being processed. | 8a0d35c0-428c-439e-9b03-b611530fe06f                                                                                        |
| `tradeAllocationCreate`                                                                                                     | [components.TradeAllocationCreate](../../models/components/tradeallocationcreate.md)                                        | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |                                                                                                                             |