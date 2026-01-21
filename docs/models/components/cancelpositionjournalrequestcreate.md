# CancelPositionJournalRequestCreate

Request to cancel an existing position journal

## Example Usage

```typescript
import { CancelPositionJournalRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelPositionJournalRequestCreate = {
  name: "positionJournals/20240717000319",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `name`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | The name of the position journal to cancel                                            | positionJournals/20240717000319                                                       |
| `reason`                                                                              | *string*                                                                              | :heavy_minus_sign:                                                                    | The reason for canceling the position journal Maximum of 100 characters are supported | Cancel position journal                                                               |