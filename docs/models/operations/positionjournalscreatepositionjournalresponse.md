# PositionJournalsCreatePositionJournalResponse

## Example Usage

```typescript
import { PositionJournalsCreatePositionJournalResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: PositionJournalsCreatePositionJournalResponse = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `httpMeta`                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)       | :heavy_check_mark:                                                       | N/A                                                                      |
| `positionJournal`                                                        | [components.PositionJournal](../../models/components/positionjournal.md) | :heavy_minus_sign:                                                       | OK                                                                       |
| `status`                                                                 | [components.Status](../../models/components/status.md)                   | :heavy_minus_sign:                                                       | INVALID_ARGUMENT: The request has an invalid argument.                   |