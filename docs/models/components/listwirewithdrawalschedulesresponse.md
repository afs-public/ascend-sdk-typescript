# ListWireWithdrawalSchedulesResponse

A paged response containing a list of Wire withdrawal transfer schedules

## Example Usage

```typescript
import { ListWireWithdrawalSchedulesResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ListWireWithdrawalSchedulesResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                          | *string*                                                                                 | :heavy_minus_sign:                                                                       | The next page token                                                                      | 4ZHd3wAaMD1IQ0ZKS2BKV0FSRVdLW4VLWkY1R1B3MU4                                              |
| `wireWithdrawalSchedules`                                                                | [components.WireWithdrawalSchedule](../../models/components/wirewithdrawalschedule.md)[] | :heavy_minus_sign:                                                                       | The list of transfer schedules                                                           |                                                                                          |