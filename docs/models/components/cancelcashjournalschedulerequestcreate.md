# CancelCashJournalScheduleRequestCreate

Request to cancel a Cash Journal transfer schedule

## Example Usage

```typescript
import { CancelCashJournalScheduleRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelCashJournalScheduleRequestCreate = {
  name: "cashJournalSchedules/40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `comment`                                                       | *string*                                                        | :heavy_minus_sign:                                              | A comment as to why the Cash Journal schedule is being canceled | User Request                                                    |
| `name`                                                          | *string*                                                        | :heavy_check_mark:                                              | The name of the Cash Journal transfer schedule to cancel        | cashJournalSchedules/40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1       |