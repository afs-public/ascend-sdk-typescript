# BookingCreateExecutionRequest

## Example Usage

```typescript
import { BookingCreateExecutionRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BookingCreateExecutionRequest = {
  accountId: "01FAKEACCOUNT1TYKWEYRH8S2K",
  tradeId: "01FAKETRADEIDPROVIDEDFROMCREATETRADE",
  executionCreate: {
    executionTime: new Date("2024-07-17T12:00:00Z"),
    externalId: "0H06HAP3A3Y",
    price: {},
    quantity: {},
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `accountId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | The account id.                                                          | 01FAKEACCOUNT1TYKWEYRH8S2K                                               |
| `tradeId`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | The trade id.                                                            | 01FAKETRADEIDPROVIDEDFROMCREATETRADE                                     |
| `executionCreate`                                                        | [components.ExecutionCreate](../../models/components/executioncreate.md) | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |