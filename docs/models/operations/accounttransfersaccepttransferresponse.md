# AccountTransfersAcceptTransferResponse

## Example Usage

```typescript
import { AccountTransfersAcceptTransferResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AccountTransfersAcceptTransferResponse = {
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
| `acceptTransferResponse`                                                                                                                          | [components.AcceptTransferResponse](../../models/components/accepttransferresponse.md)                                                            | :heavy_minus_sign:                                                                                                                                | OK                                                                                                                                                |
| `status`                                                                                                                                          | [components.Status](../../models/components/status.md)                                                                                            | :heavy_minus_sign:                                                                                                                                | INVALID_ARGUMENT: The request has an invalid argument.<br/>FAILED_PRECONDITION: The transfer resource is not in the correct state for this operation. |