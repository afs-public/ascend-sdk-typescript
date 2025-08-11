# BasketOrderCreateSpecialReportingInstructions

## Example Usage

```typescript
import { BasketOrderCreateSpecialReportingInstructions } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BasketOrderCreateSpecialReportingInstructions =
  BasketOrderCreateSpecialReportingInstructions.Solicited;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                       | Value                                      |
| ------------------------------------------ | ------------------------------------------ |
| `SpecialReportingInstructionsUnspecified`  | SPECIAL_REPORTING_INSTRUCTIONS_UNSPECIFIED |
| `Solicited`                                | SOLICITED                                  |
| `Unsolicited`                              | UNSOLICITED                                |
| `RoundUp`                                  | ROUND_UP                                   |
| -                                          | `Unrecognized<string>`                     |