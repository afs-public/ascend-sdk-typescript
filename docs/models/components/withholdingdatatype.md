# WithholdingDataType

Provides more detail on the type of the withholding (Federal, State, etc.)

## Example Usage

```typescript
import { WithholdingDataType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: WithholdingDataType = WithholdingDataType.Federal;
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