# ExerciseServiceCreateOptionInstructionResponse

## Example Usage

```typescript
import { ExerciseServiceCreateOptionInstructionResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: ExerciseServiceCreateOptionInstructionResponse = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `httpMeta`                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)           | :heavy_check_mark:                                                           | N/A                                                                          |
| `optionInstruction`                                                          | [components.OptionInstruction](../../models/components/optioninstruction.md) | :heavy_minus_sign:                                                           | OK                                                                           |
| `status`                                                                     | [components.Status](../../models/components/status.md)                       | :heavy_minus_sign:                                                           | Default error response                                                       |