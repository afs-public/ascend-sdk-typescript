# IDDocumentUploadRequestCreate

Identity document to be uploaded;

## Example Usage

```typescript
import { IDDocumentUploadRequestCreate, IDDocumentUploadRequestCreateDocumentType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: IDDocumentUploadRequestCreate = {
  correspondentId: "01HPMZZM6RKMVZA1JQ63RQKJRP",
  documentType: IDDocumentUploadRequestCreateDocumentType.Passport,
  legalNaturalPersonId: "01HWQJYXMQ31BPM9990Y6XEYA5",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `correspondentId`                                                                                                            | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Identifies the correspondent relevant to the document; Required for all identity documents                                   | 01HPMZZM6RKMVZA1JQ63RQKJRP                                                                                                   |
| `documentType`                                                                                                               | [components.IDDocumentUploadRequestCreateDocumentType](../../models/components/iddocumentuploadrequestcreatedocumenttype.md) | :heavy_check_mark:                                                                                                           | Describes the contents of a document and how it is used; Required for all identity documents                                 | PASSPORT                                                                                                                     |
| `legalNaturalPersonId`                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Identifies the legal natural person relevant to the document                                                                 | 01HWQJYXMQ31BPM9990Y6XEYA5                                                                                                   |