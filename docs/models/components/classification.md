# Classification

Classification is the category of option that the option falls into These are based on how the contract was written. Only STANDARD is supported at this time.

## Example Usage

```typescript
import { Classification } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Classification = Classification.Standard;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `ClassificationUnspecified` | CLASSIFICATION_UNSPECIFIED  |
| `Standard`                  | STANDARD                    |
| `Flex`                      | FLEX                        |
| -                           | `Unrecognized<string>`      |