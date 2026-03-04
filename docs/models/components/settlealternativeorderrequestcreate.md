# SettleAlternativeOrderRequestCreate

Request to settle an alternative order. Note: This is a simulation of settlement for testing purposes only, not to be used in production.

## Example Usage

```typescript
import { SettleAlternativeOrderRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: SettleAlternativeOrderRequestCreate = {
  name:
    "accounts/01JR8YQT40WAQT8S95ZQGS1QN0/alternativeOrders/01H5TSDAD9MQ98B8KF36J3Q8P9",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The name of the alternative order to settle.<br/><br/> Format: accounts/{account}/alternativeOrders/{alternative_order} | accounts/01JR8YQT40WAQT8S95ZQGS1QN0/alternativeOrders/01H5TSDAD9MQ98B8KF36J3Q8P9                                       |
| `orderSettlementTarget`                                                                                                | [components.OrderSettlementTarget](../../models/components/ordersettlementtarget.md)                                   | :heavy_minus_sign:                                                                                                     | The desired target settlement state of the order. If unspecified, the order settlement state will default to "FILLED". | FILLED                                                                                                                 |