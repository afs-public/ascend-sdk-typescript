# ActivityRetirementType

The type of retirement account the withdrawal is being made from

## Example Usage

```typescript
import { ActivityRetirementType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityRetirementType = ActivityRetirementType.Ira;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `RetirementTypeUnspecified` | RETIREMENT_TYPE_UNSPECIFIED |
| `Ira`                       | IRA                         |
| `Sep`                       | SEP                         |
| `Simple`                    | SIMPLE                      |
| `Keogh`                     | KEOGH                       |
| `Roth`                      | ROTH                        |
| `Qp`                        | QP                          |
| `RolloverIra`               | ROLLOVER_IRA                |
| -                           | `Unrecognized<string>`      |