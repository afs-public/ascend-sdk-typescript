# BookingCreateTradeRequest

## Example Usage

```typescript
import {
  RouteType,
  TradeCreateAssetType,
  TradeCreateBrokerCapacity,
  TradeCreateIdentifierType,
  TradeCreateSide,
} from "@apexfintechsolutions/ascend-sdk/models/components";
import { BookingCreateTradeRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BookingCreateTradeRequest = {
  accountId: "01FAKEACCOUNT1TYKWEYRH8S2K",
  tradeCreate: {
    accountId: "02HASWB2DTMRT3DAM45P56J2T2",
    assetType: TradeCreateAssetType.Equity,
    brokerCapacity: TradeCreateBrokerCapacity.Agency,
    clientOrderId: "00be5285-0623-4560-8c58-f05af2c56ba0",
    executions: [],
    identifier: "AAPL",
    identifierType: TradeCreateIdentifierType.Symbol,
    routeType: RouteType.Mngd,
    side: TradeCreateSide.Buy,
    sourceApplication: "Trading-App",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `accountId`                                                      | *string*                                                         | :heavy_check_mark:                                               | The account id.                                                  | 01FAKEACCOUNT1TYKWEYRH8S2K                                       |
| `tradeCreate`                                                    | [components.TradeCreate](../../models/components/tradecreate.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |