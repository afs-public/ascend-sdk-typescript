# PositionJournalsCancelPositionJournalRequest

## Example Usage

```typescript
import { PositionJournalsCancelPositionJournalRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: PositionJournalsCancelPositionJournalRequest = {
  positionJournalId: "20240717000319",
  cancelPositionJournalRequestCreate: {
    name: "positionJournals/20240717000319",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `positionJournalId`                                                                                            | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The positionJournal id.                                                                                        | 20240717000319                                                                                                 |
| `cancelPositionJournalRequestCreate`                                                                           | [components.CancelPositionJournalRequestCreate](../../models/components/cancelpositionjournalrequestcreate.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |