# ScheduleDetails

The transfer schedule details

## Example Usage

```typescript
import { ScheduleDetails } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ScheduleDetails = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               | Example                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                  | [components.AchDepositScheduleAmount](../../models/components/achdepositscheduleamount.md)                                | :heavy_minus_sign:                                                                                                        | A cash amount in the format of decimal value                                                                              | {<br/>"value": "100.00"<br/>}                                                                                             |
| `clientScheduleId`                                                                                                        | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | External identifier supplied by the API caller. Each request must have a unique pairing of client_schedule_id and account | ABC-123                                                                                                                   |
| `scheduleProperties`                                                                                                      | [components.AchDepositScheduleScheduleProperties](../../models/components/achdepositschedulescheduleproperties.md)        | :heavy_minus_sign:                                                                                                        | Common schedule properties                                                                                                |                                                                                                                           |