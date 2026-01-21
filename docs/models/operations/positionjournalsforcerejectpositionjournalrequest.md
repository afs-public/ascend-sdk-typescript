# PositionJournalsForceRejectPositionJournalRequest

## Example Usage

```typescript
import { PositionJournalsForceRejectPositionJournalRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: PositionJournalsForceRejectPositionJournalRequest = {
  positionJournalId: "20230817000319",
  forceRejectPositionJournalRequestCreate: {
    name: "positionJournals/20230817000319",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `positionJournalId`                                                                                                      | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The positionJournal id.                                                                                                  | 20230817000319                                                                                                           |
| `forceRejectPositionJournalRequestCreate`                                                                                | [components.ForceRejectPositionJournalRequestCreate](../../models/components/forcerejectpositionjournalrequestcreate.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |