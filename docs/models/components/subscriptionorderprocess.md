# SubscriptionOrderProcess

The process used for subscriptions orders of this asset.

## Example Usage

```typescript
import { SubscriptionOrderProcess } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: SubscriptionOrderProcess = SubscriptionOrderProcess.EscrowTrade;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                   | Value                                  |
| -------------------------------------- | -------------------------------------- |
| `SubscriptionOrderProcessUnspecified`  | SUBSCRIPTION_ORDER_PROCESS_UNSPECIFIED |
| `SettlementPostNavCalculation`         | SETTLEMENT_POST_NAV_CALCULATION        |
| `SettlementPreNavCalculation`          | SETTLEMENT_PRE_NAV_CALCULATION         |
| `EscrowTrade`                          | ESCROW_TRADE                           |
| `CommitmentDrawDown`                   | COMMITMENT_DRAW_DOWN                   |
| -                                      | `Unrecognized<string>`                 |