# ReaderGetEventMessageResponse

## Example Usage

```typescript
import { ReaderGetEventMessageResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: ReaderGetEventMessageResponse = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `eventMessage`                                                     | [components.EventMessage](../../models/components/eventmessage.md) | :heavy_minus_sign:                                                 | OK                                                                 |
| `status`                                                           | [components.Status](../../models/components/status.md)             | :heavy_minus_sign:                                                 | INVALID_ARGUMENT: The request was not well formed.                 |