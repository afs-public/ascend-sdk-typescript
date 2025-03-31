# EntryWithholdingType

The type of withholding

## Example Usage

```typescript
import { EntryWithholdingType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EntryWithholdingType = EntryWithholdingType.FederalIra;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                         | Value                        |
| ---------------------------- | ---------------------------- |
| `WithholdingTypeUnspecified` | WITHHOLDING_TYPE_UNSPECIFIED |
| `Federal`                    | FEDERAL                      |
| `State`                      | STATE                        |
| `ForeignSecurity`            | FOREIGN_SECURITY             |
| `FederalIra`                 | FEDERAL_IRA                  |
| `StateIra`                   | STATE_IRA                    |
| `NonResidentAlien`           | NON_RESIDENT_ALIEN           |
| -                            | `Unrecognized<string>`       |