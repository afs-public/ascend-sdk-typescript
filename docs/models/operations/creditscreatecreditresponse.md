# CreditsCreateCreditResponse

## Example Usage

```typescript
import { CreditsCreateCreditResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: CreditsCreateCreditResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `httpMeta`                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)       | :heavy_check_mark:                                                       | N/A                                                                      |
| `transfersCredit`                                                        | [components.TransfersCredit](../../models/components/transferscredit.md) | :heavy_minus_sign:                                                       | OK                                                                       |
| `status`                                                                 | [components.Status](../../models/components/status.md)                   | :heavy_minus_sign:                                                       | INVALID_ARGUMENT: The request has an invalid argument.                   |