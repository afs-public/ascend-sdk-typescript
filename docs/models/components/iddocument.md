# IdDocument

Fields specific to an identity document

## Example Usage

```typescript
import { IdDocument } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: IdDocument = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `documentType`                                                                                         | [components.DocumentIdDocumentDocumentType](../../models/components/documentiddocumentdocumenttype.md) | :heavy_minus_sign:                                                                                     | Describes the contents of a document and how it is used                                                | PASSPORT                                                                                               |
| `legalNaturalPersonId`                                                                                 | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Identifies the legal natural person relevant to the document                                           | 01HWQJYXMQ31BPM9990Y6XEYA5                                                                             |
| `uploadedDate`                                                                                         | [components.DocumentUploadedDate](../../models/components/documentuploadeddate.md)                     | :heavy_minus_sign:                                                                                     | Date that the document was uploaded                                                                    |                                                                                                        |