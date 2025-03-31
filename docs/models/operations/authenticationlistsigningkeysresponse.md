# AuthenticationListSigningKeysResponse

## Example Usage

```typescript
import { AuthenticationListSigningKeysResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AuthenticationListSigningKeysResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `listSigningKeysResponse`                                                                | [components.ListSigningKeysResponse](../../models/components/listsigningkeysresponse.md) | :heavy_minus_sign:                                                                       | OK                                                                                       |
| `status`                                                                                 | [components.Status](../../models/components/status.md)                                   | :heavy_minus_sign:                                                                       | INTERNAL: An internal server error occurred.                                             |