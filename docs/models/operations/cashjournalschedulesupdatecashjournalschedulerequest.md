# CashJournalSchedulesUpdateCashJournalScheduleRequest

## Example Usage

```typescript
import { CashJournalSchedulesUpdateCashJournalScheduleRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: CashJournalSchedulesUpdateCashJournalScheduleRequest = {
  cashJournalScheduleId: "40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1",
  cashJournalScheduleUpdate: {},
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               | Example                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `cashJournalScheduleId`                                                                                                   | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | The cashJournalSchedule id.                                                                                               | 40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1                                                                                      |
| `updateMask`                                                                                                              | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | A field mask representing the update. Note: only the 'schedule_details.amount' field of a schedule is currently updatable | {<br/>"update_mask": "schedule_details.amount"<br/>}                                                                      |
| `cashJournalScheduleUpdate`                                                                                               | [components.CashJournalScheduleUpdate](../../models/components/cashjournalscheduleupdate.md)                              | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |                                                                                                                           |