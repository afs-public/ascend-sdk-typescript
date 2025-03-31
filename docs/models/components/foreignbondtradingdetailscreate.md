# ForeignBondTradingDetailsCreate

Foreign bond trading detail

## Example Usage

```typescript
import { ForeignBondTradingDetailsCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ForeignBondTradingDetailsCreate = {
  foreignBondTrading: true,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `foreignBondTrading`                                                                                     | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | Does the account anticipate trading in foreign bonds                                                     | true                                                                                                     |
| `foreignBondTradingDetail`                                                                               | [components.ForeignBondTradingDetailCreate](../../models/components/foreignbondtradingdetailcreate.md)[] | :heavy_minus_sign:                                                                                       | The foreign bond trading countries details. If yes, than please provide details                          |                                                                                                          |