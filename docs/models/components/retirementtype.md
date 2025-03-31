# RetirementType

Used for descriptive purposes only. Indicates the type of retirement account

## Example Usage

```typescript
import { RetirementType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RetirementType = RetirementType.Ira;
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