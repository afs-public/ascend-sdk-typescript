# AccountTransfersRejectTransferResponse

## Example Usage

```typescript
import { AccountTransfersRejectTransferResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AccountTransfersRejectTransferResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                                        | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                                                | :heavy_check_mark:                                                                                                                                | N/A                                                                                                                                               |
| `rejectTransferResponse`                                                                                                                          | [components.RejectTransferResponse](../../models/components/rejecttransferresponse.md)                                                            | :heavy_minus_sign:                                                                                                                                | OK                                                                                                                                                |
| `status`                                                                                                                                          | [components.Status](../../models/components/status.md)                                                                                            | :heavy_minus_sign:                                                                                                                                | INVALID_ARGUMENT: The request has an invalid argument.<br/>FAILED_PRECONDITION: The transfer resource is not in the correct state for this operation. |