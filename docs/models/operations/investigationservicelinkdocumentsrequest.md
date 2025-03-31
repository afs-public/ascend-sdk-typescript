# InvestigationServiceLinkDocumentsRequest

## Example Usage

```typescript
import { InvestigationServiceLinkDocumentsRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: InvestigationServiceLinkDocumentsRequest = {
  investigationId: "01HEWVF4ZSNKYRP293J53ASJCJ",
  linkDocumentsRequestCreate: {
    identityVerificationDocumentIds: [
      "0f01ae1f-d24c-4171-8f3f-c0b820bf3044",
    ],
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `investigationId`                                                                              | *string*                                                                                       | :heavy_check_mark:                                                                             | The investigation id.                                                                          | 01HEWVF4ZSNKYRP293J53ASJCJ                                                                     |
| `linkDocumentsRequestCreate`                                                                   | [components.LinkDocumentsRequestCreate](../../models/components/linkdocumentsrequestcreate.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |