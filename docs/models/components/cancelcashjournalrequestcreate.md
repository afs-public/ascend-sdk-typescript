# CancelCashJournalRequestCreate

Request to cancel an existing cash journal

## Example Usage

```typescript
import { CancelCashJournalRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelCashJournalRequestCreate = {
  name: "cashJournals/20240717000319",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `name`                                                                            | *string*                                                                          | :heavy_check_mark:                                                                | The name of the cash journal to cancel                                            | cashJournals/20240717000319                                                       |
| `reason`                                                                          | *string*                                                                          | :heavy_minus_sign:                                                                | The reason for canceling the cash journal Maximum of 100 characters are supported | Cancel journal                                                                    |