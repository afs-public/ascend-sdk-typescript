# BookingGetExecutionRequest

## Example Usage

```typescript
import { BookingGetExecutionRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BookingGetExecutionRequest = {
  accountId: "01FAKEACCOUNT1TYKWEYRH8S2K",
  tradeId: "01FAKETRADEIDPROVIDEDFROMCREATETRADE",
  executionId: "01FAKEEXECUTONIDPROVIDEDFROMBOOKINGAPI",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `accountId`                            | *string*                               | :heavy_check_mark:                     | The account id.                        | 01FAKEACCOUNT1TYKWEYRH8S2K             |
| `tradeId`                              | *string*                               | :heavy_check_mark:                     | The trade id.                          | 01FAKETRADEIDPROVIDEDFROMCREATETRADE   |
| `executionId`                          | *string*                               | :heavy_check_mark:                     | The execution id.                      | 01FAKEEXECUTONIDPROVIDEDFROMBOOKINGAPI |