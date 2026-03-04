# ExerciseServiceCancelOptionInstructionRequest

## Example Usage

```typescript
import { ExerciseServiceCancelOptionInstructionRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: ExerciseServiceCancelOptionInstructionRequest = {
  accountId: "ACC123456",
  assetId: "12345",
  instructionId: "abc12345",
  cancelOptionInstructionRequestCreate: {
    name: "accounts/ACC123456/assets/12345/instructions/abc12345",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The account id.                                                                                                    | ACC123456                                                                                                          |
| `assetId`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The asset id.                                                                                                      | 12345                                                                                                              |
| `instructionId`                                                                                                    | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The instruction id.                                                                                                | abc12345                                                                                                           |
| `cancelOptionInstructionRequestCreate`                                                                             | [components.CancelOptionInstructionRequestCreate](../../models/components/canceloptioninstructionrequestcreate.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |