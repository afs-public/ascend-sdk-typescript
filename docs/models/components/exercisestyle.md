# ExerciseStyle

Indicates how and when an option can be exercised, either American (exercise any time before expiration) or European (exercise only at expiration).

## Example Usage

```typescript
import { ExerciseStyle } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ExerciseStyle = ExerciseStyle.American;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                       | Value                      |
| -------------------------- | -------------------------- |
| `ExerciseStyleUnspecified` | EXERCISE_STYLE_UNSPECIFIED |
| `American`                 | AMERICAN                   |
| `European`                 | EUROPEAN                   |
| -                          | `Unrecognized<string>`     |