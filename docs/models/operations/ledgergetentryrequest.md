# LedgerGetEntryRequest

## Example Usage

```typescript
import { LedgerGetEntryRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: LedgerGetEntryRequest = {
  accountId: "{account_id}",
  entryId: "{entry_id}",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `accountId`        | *string*           | :heavy_check_mark: | The account id.    | {account_id}       |
| `entryId`          | *string*           | :heavy_check_mark: | The entry id.      | {entry_id}         |