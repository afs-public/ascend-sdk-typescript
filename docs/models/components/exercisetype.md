# ExerciseType

Exercise type classification

## Example Usage

```typescript
import { ExerciseType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ExerciseType = ExerciseType.AutoExercise;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                      | Value                     |
| ------------------------- | ------------------------- |
| `ExerciseTypeUnspecified` | EXERCISE_TYPE_UNSPECIFIED |
| `AutoExercise`            | AUTO_EXERCISE             |
| `EarlyExercise`           | EARLY_EXERCISE            |
| `ExerciseByException`     | EXERCISE_BY_EXCEPTION     |
| -                         | `Unrecognized<string>`    |