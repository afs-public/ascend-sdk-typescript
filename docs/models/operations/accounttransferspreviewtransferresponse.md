# AccountTransfersPreviewTransferResponse

## Example Usage

```typescript
import { AccountTransfersPreviewTransferResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AccountTransfersPreviewTransferResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `previewTransferResponse`                                                                | [components.PreviewTransferResponse](../../models/components/previewtransferresponse.md) | :heavy_minus_sign:                                                                       | OK                                                                                       |
| `status`                                                                                 | [components.Status](../../models/components/status.md)                                   | :heavy_minus_sign:                                                                       | INVALID_ARGUMENT: The request is missing a source or is malformed.                       |