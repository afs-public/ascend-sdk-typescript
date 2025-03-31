# EmploymentUpdateEmploymentStatus

Classifies in what capacity (or if) the underlying natural person holds a job

## Example Usage

```typescript
import { EmploymentUpdateEmploymentStatus } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EmploymentUpdateEmploymentStatus =
  EmploymentUpdateEmploymentStatus.Employed;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `StatusUnspecified`    | STATUS_UNSPECIFIED     |
| `Employed`             | EMPLOYED               |
| `SelfEmployed`         | SELF_EMPLOYED          |
| `Unemployed`           | UNEMPLOYED             |
| `Retired`              | RETIRED                |
| `Student`              | STUDENT                |
| -                      | `Unrecognized<string>` |