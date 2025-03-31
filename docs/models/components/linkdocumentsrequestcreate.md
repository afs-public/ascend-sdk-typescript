# LinkDocumentsRequestCreate

Custom request - adds identity verification documentIds to investigation request

## Example Usage

```typescript
import { LinkDocumentsRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: LinkDocumentsRequestCreate = {
  identityVerificationDocumentIds: [
    "0f01ae1f-d24c-4171-8f3f-c0b820bf3044",
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `identityVerificationDocumentIds`                        | *string*[]                                               | :heavy_check_mark:                                       | Document ids to be added to identity verification result | 0f01ae1f-d24c-4171-8f3f-c0b820bf3044                     |