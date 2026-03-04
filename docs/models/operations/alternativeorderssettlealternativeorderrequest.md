# AlternativeOrdersSettleAlternativeOrderRequest

## Example Usage

```typescript
import { AlternativeOrdersSettleAlternativeOrderRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AlternativeOrdersSettleAlternativeOrderRequest = {
  accountId: "01JR8YQT40WAQT8S95ZQGS1QN0",
  alternativeOrderId: "01H5TSDAD9MQ98B8KF36J3Q8P9",
  settleAlternativeOrderRequestCreate: {
    name:
      "accounts/01JR8YQT40WAQT8S95ZQGS1QN0/alternativeOrders/01H5TSDAD9MQ98B8KF36J3Q8P9",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The account id.                                                                                                  | 01JR8YQT40WAQT8S95ZQGS1QN0                                                                                       |
| `alternativeOrderId`                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The alternativeOrder id.                                                                                         | 01H5TSDAD9MQ98B8KF36J3Q8P9                                                                                       |
| `settleAlternativeOrderRequestCreate`                                                                            | [components.SettleAlternativeOrderRequestCreate](../../models/components/settlealternativeorderrequestcreate.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |