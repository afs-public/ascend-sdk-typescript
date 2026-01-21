# PositionJournalsForceApprovePositionJournalRequest

## Example Usage

```typescript
import { PositionJournalsForceApprovePositionJournalRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: PositionJournalsForceApprovePositionJournalRequest = {
  positionJournalId: "20230817000319",
  forceApprovePositionJournalRequestCreate: {
    name: "positionJournals/20230817000319",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `positionJournalId`                                                                                                        | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The positionJournal id.                                                                                                    | 20230817000319                                                                                                             |
| `forceApprovePositionJournalRequestCreate`                                                                                 | [components.ForceApprovePositionJournalRequestCreate](../../models/components/forceapprovepositionjournalrequestcreate.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |                                                                                                                            |