# YieldType

Characterization of a yield percentage

## Example Usage

```typescript
import { YieldType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: YieldType = YieldType.YieldToCall;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `YieldTypeUnspecified` | YIELD_TYPE_UNSPECIFIED |
| `YieldToCall`          | YIELD_TO_CALL          |
| `YieldToMaturity`      | YIELD_TO_MATURITY      |
| `YieldToPut`           | YIELD_TO_PUT           |
| `YieldToWorst`         | YIELD_TO_WORST         |
| -                      | `Unrecognized<string>` |