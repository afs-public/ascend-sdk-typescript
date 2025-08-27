# BookingRebookTradeRequest

## Example Usage

```typescript
import {
  RouteType,
  TradeCreateAssetType,
  TradeCreateBrokerCapacity,
  TradeCreateIdentifierType,
  TradeCreateSide,
} from "@apexfintechsolutions/ascend-sdk/models/components";
import { BookingRebookTradeRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BookingRebookTradeRequest = {
  accountId: "02HASWB2DTMRT3DAM45P56J2T2",
  tradeId: "01J0XX2KDN3M9QKFKRE2HYSCQM",
  rebookTradeRequestCreate: {
    name:
      "accounts/02HASWB2DTMRT3DAM45P56J2T2/trades/01J0XX2KDN3M9QKFKRE2HYSCQM",
    trade: {
      accountId: "02HASWB2DTMRT3DAM45P56J2T2",
      assetType: TradeCreateAssetType.Equity,
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
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `accountId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | The account id.                                                                            | 02HASWB2DTMRT3DAM45P56J2T2                                                                 |
| `tradeId`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | The trade id.                                                                              | 01J0XX2KDN3M9QKFKRE2HYSCQM                                                                 |
| `rebookTradeRequestCreate`                                                                 | [components.RebookTradeRequestCreate](../../models/components/rebooktraderequestcreate.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |