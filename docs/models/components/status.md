# Status

The status message serves as the general-purpose service error message. Each status message includes a gRPC error code, error message, and error details.

## Example Usage

```typescript
import { Status } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Status = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `code`                                                              | *number*                                                            | :heavy_minus_sign:                                                  | The code field contains an enum value of google.rpc.Code.           |
| `details`                                                           | [components.Any](../../models/components/any.md)[]                  | :heavy_minus_sign:                                                  | The details field contains one or more technical error details.     |
| `message`                                                           | *string*                                                            | :heavy_minus_sign:                                                  | The message field contains human-friendly messages about the error. |