# RebookTradeAllocationRequestCreate

Used to correct a trade allocation.

## Example Usage

```typescript
import {
  RebookTradeAllocationRequestCreate,
  ToSide,
  TradeAllocationCreateBrokerCapacity,
  TradeAllocationCreateIdentifierType,
} from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RebookTradeAllocationRequestCreate = {
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
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                      | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | The name of the original trade allocation to rebook.                                                                        | accounts/02HASWB2DTMRT3DAM45P56J2T2/tradeAllocations/01J0XX2KDN3M9QKFKRE2HYSCQM                                             |
| `requestId`                                                                                                                 | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | A globally unique UUID that is specific to the request. This id is used to prevent duplicate requests from being processed. | 8a0d35c0-428c-439e-9b03-b611530fe06f                                                                                        |
| `tradeAllocation`                                                                                                           | [components.TradeAllocationCreate](../../models/components/tradeallocationcreate.md)                                        | :heavy_check_mark:                                                                                                          | A TradeAllocation represents the movement of positions between two ascend accounts.                                         |                                                                                                                             |