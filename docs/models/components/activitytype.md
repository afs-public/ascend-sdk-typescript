# ActivityType

The type of activity this is

## Example Usage

```typescript
import { ActivityType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityType = ActivityType.Trade;
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