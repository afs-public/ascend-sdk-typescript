# CheckWithdrawalSchedulesCancelCheckWithdrawalScheduleResponse

## Example Usage

```typescript
import { CheckWithdrawalSchedulesCancelCheckWithdrawalScheduleResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: CheckWithdrawalSchedulesCancelCheckWithdrawalScheduleResponse = {};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                              | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                                      | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |
| `checkWithdrawalSchedule`                                                                                                               | [components.CheckWithdrawalSchedule](../../models/components/checkwithdrawalschedule.md)                                                | :heavy_minus_sign:                                                                                                                      | OK                                                                                                                                      |
| `status`                                                                                                                                | [components.Status](../../models/components/status.md)                                                                                  | :heavy_minus_sign:                                                                                                                      | INVALID_ARGUMENT: The request has an invalid argument.<br/>FAILED_PRECONDITION: The schedule is in a state that doesn't allow cancellation. |