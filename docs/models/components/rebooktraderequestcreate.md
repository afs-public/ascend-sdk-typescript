# RebookTradeRequestCreate

Used to correct an entire fill of trades using the activity_id that is common to all of the trades in the request

## Example Usage

```typescript
import {
  RebookTradeRequestCreate,
  RouteType,
  TradeCreateBrokerCapacity,
  TradeCreateIdentifierType,
  TradeCreateSide,
} from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RebookTradeRequestCreate = {
  name: "accounts/02HASWB2DTMRT3DAM45P56J2T2/trades/01J0XX2KDN3M9QKFKRE2HYSCQM",
  trade: {
    accountId: "02HASWB2DTMRT3DAM45P56J2T2",
    brokerCapacity: TradeCreateBrokerCapacity.Agency,
    clientOrderId: "00be5285-0623-4560-8c58-f05af2c56ba0",
    executions: [
      {
        executionTime: new Date("2024-07-17T12:00:00Z"),
        externalId: "0H06HAP3A3Y",
        price: {},
        quantity: {},
      },
    ],
    identifier: "AAPL",
    identifierType: TradeCreateIdentifierType.Symbol,
    routeType: RouteType.Mngd,
    side: TradeCreateSide.Buy,
    sourceApplication: "Trading-App",
  },
};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               | Example                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                    | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | The name of the trade to rebook.                                                                                                                          | accounts/02HASWB2DTMRT3DAM45P56J2T2/trades/01J0XX2KDN3M9QKFKRE2HYSCQM                                                                                     |
| `trade`                                                                                                                                                   | [components.TradeCreate](../../models/components/tradecreate.md)                                                                                          | :heavy_check_mark:                                                                                                                                        | A Trade represents an entire order made by a client. Trades can hold one or many executions representing partial fills that aggregate into a whole order. |                                                                                                                                                           |