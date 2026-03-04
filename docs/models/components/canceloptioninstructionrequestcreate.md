# CancelOptionInstructionRequestCreate

Request to cancel an existing option instruction

## Example Usage

```typescript
import { CancelOptionInstructionRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelOptionInstructionRequestCreate = {
  name: "accounts/ACC123456/assets/12345/instructions/abc12345",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `name`                                                | *string*                                              | :heavy_check_mark:                                    | The name of the instruction to be cancelled.          | accounts/ACC123456/assets/12345/instructions/abc12345 |