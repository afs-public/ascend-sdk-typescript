# ExerciseServiceCancelOptionInstructionResponse

## Example Usage

```typescript
import { ExerciseServiceCancelOptionInstructionResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: ExerciseServiceCancelOptionInstructionResponse = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `httpMeta`                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)           | :heavy_check_mark:                                                           | N/A                                                                          |
| `optionInstruction`                                                          | [components.OptionInstruction](../../models/components/optioninstruction.md) | :heavy_minus_sign:                                                           | OK                                                                           |
| `status`                                                                     | [components.Status](../../models/components/status.md)                       | :heavy_minus_sign:                                                           | Default error response                                                       |