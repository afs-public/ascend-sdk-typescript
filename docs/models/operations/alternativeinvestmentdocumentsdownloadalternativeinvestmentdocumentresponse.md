# AlternativeInvestmentDocumentsDownloadAlternativeInvestmentDocumentResponse

## Example Usage

```typescript
import { AlternativeInvestmentDocumentsDownloadAlternativeInvestmentDocumentResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value:
  AlternativeInvestmentDocumentsDownloadAlternativeInvestmentDocumentResponse =
    {};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                                   | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `downloadAlternativeInvestmentDocumentResponse`                                                                                      | [components.DownloadAlternativeInvestmentDocumentResponse](../../models/components/downloadalternativeinvestmentdocumentresponse.md) | :heavy_minus_sign:                                                                                                                   | OK                                                                                                                                   |
| `status`                                                                                                                             | [components.Status](../../models/components/status.md)                                                                               | :heavy_minus_sign:                                                                                                                   | INVALID_ARGUMENT: The request has an invalid argument.<br/>FAILED_PRECONDITION: The requested resource is not in the expected state. |