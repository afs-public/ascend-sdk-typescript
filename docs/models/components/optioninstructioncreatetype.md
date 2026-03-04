# OptionInstructionCreateType

Type of instruction

## Example Usage

```typescript
import { OptionInstructionCreateType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OptionInstructionCreateType =
  OptionInstructionCreateType.DoNotExercise;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                         | Value                        |
| ---------------------------- | ---------------------------- |
| `InstructionTypeUnspecified` | INSTRUCTION_TYPE_UNSPECIFIED |
| `DoNotExercise`              | DO_NOT_EXERCISE              |
| `ExerciseByException`        | EXERCISE_BY_EXCEPTION        |
| `EarlyExercise`              | EARLY_EXERCISE               |
| -                            | `Unrecognized<string>`       |