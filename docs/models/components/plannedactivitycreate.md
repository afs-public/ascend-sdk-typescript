# PlannedActivityCreate

Details the customer's intended trading and banking-related activities at the time of account application; informs risk checks and forms a baseline for anomalous activity detection

## Example Usage

```typescript
import { PlannedActivityCreate, PrimaryAccountActivityType, WithdrawalFrequency } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: PlannedActivityCreate = {
  foreignBondTradingDetails: {
    foreignBondTrading: true,
  },
  lowPricedSecurities: {
    lowPricedSecurities: true,
  },
  primaryAccountActivityType: PrimaryAccountActivityType.ActiveTrading,
  withdrawalFrequency: WithdrawalFrequency.Frequent,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `foreignBondTradingDetails`                                                                              | [components.ForeignBondTradingDetailsCreate](../../models/components/foreignbondtradingdetailscreate.md) | :heavy_check_mark:                                                                                       | Foreign bond trading detail                                                                              |                                                                                                          |
| `lowPricedSecurities`                                                                                    | [components.LowPricedSecuritiesCreate](../../models/components/lowpricedsecuritiescreate.md)             | :heavy_check_mark:                                                                                       | Low priced securities                                                                                    |                                                                                                          |
| `primaryAccountActivityType`                                                                             | [components.PrimaryAccountActivityType](../../models/components/primaryaccountactivitytype.md)           | :heavy_check_mark:                                                                                       | The primary account activity type                                                                        | ACTIVE_TRADING                                                                                           |
| `withdrawalFrequency`                                                                                    | [components.WithdrawalFrequency](../../models/components/withdrawalfrequency.md)                         | :heavy_check_mark:                                                                                       | The frequency by which cash is anticipated to be withdrawn from the account                              | FREQUENT                                                                                                 |