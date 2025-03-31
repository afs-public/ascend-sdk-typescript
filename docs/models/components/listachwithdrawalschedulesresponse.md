# ListAchWithdrawalSchedulesResponse

A paged response containing a list of ACH withdrawal transfer schedules

## Example Usage

```typescript
import { ListAchWithdrawalSchedulesResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ListAchWithdrawalSchedulesResponse = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `achWithdrawalSchedules`                                                               | [components.AchWithdrawalSchedule](../../models/components/achwithdrawalschedule.md)[] | :heavy_minus_sign:                                                                     | The list of transfer schedules                                                         |                                                                                        |
| `nextPageToken`                                                                        | *string*                                                                               | :heavy_minus_sign:                                                                     | The next page token                                                                    | 4ZHd3wAaMD1IQ0ZKS2BKV0FSRVdLW4VLWkY1R1B3MU4                                            |