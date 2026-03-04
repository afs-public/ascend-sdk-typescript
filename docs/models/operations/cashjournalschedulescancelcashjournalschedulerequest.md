# CashJournalSchedulesCancelCashJournalScheduleRequest

## Example Usage

```typescript
import { CashJournalSchedulesCancelCashJournalScheduleRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: CashJournalSchedulesCancelCashJournalScheduleRequest = {
  cashJournalScheduleId: "40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1",
  cancelCashJournalScheduleRequestCreate: {
    name: "cashJournalSchedules/40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `cashJournalScheduleId`                                                                                                | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The cashJournalSchedule id.                                                                                            | 40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1                                                                                   |
| `cancelCashJournalScheduleRequestCreate`                                                                               | [components.CancelCashJournalScheduleRequestCreate](../../models/components/cancelcashjournalschedulerequestcreate.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |