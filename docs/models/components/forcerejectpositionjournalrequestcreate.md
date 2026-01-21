# ForceRejectPositionJournalRequestCreate

Request to force reject a pending position journal

## Example Usage

```typescript
import { ForceRejectPositionJournalRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ForceRejectPositionJournalRequestCreate = {
  name: "positionJournals/20230817000319",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | The name of the position journal to force reject           | positionJournals/20230817000319                            |
| `reason`                                                   | *string*                                                   | :heavy_minus_sign:                                         | The optional reason for force rejecting a position journal | Forced rejection test                                      |