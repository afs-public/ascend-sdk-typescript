# WithholdingType1

Describes the type of the withholding (Federal, State, etc.)

## Example Usage

```typescript
import { WithholdingType1 } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: WithholdingType1 = WithholdingType1.Federal;
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