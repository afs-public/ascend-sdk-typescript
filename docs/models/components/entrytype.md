# EntryType

The Type of the entry; determines the set of mandatory fields as well as informing downstream processes how to handle this record

## Example Usage

```typescript
import { EntryType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EntryType = EntryType.Trade;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `TypeUnspecified`      | TYPE_UNSPECIFIED       |
| `Trade`                | TRADE                  |
| `Movement`             | MOVEMENT               |
| `Memo`                 | MEMO                   |
| `CorporateAction`      | CORPORATE_ACTION       |
| -                      | `Unrecognized<string>` |