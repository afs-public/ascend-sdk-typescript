# AccountDocument

Fields specific to an account document

## Example Usage

```typescript
import { AccountDocument } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AccountDocument = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `accountId`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | Identifies the account relevant to the document                                    | 01HCZ4ZE2248BR4SC6DE5KFF8S                                                         |
| `documentType`                                                                     | [components.DocumentDocumentType](../../models/components/documentdocumenttype.md) | :heavy_minus_sign:                                                                 | Describes the contents of a document and how it is used                            | FDIC_SWEEP_PROGRAM_AGREEMENT                                                       |
| `uploadedDate`                                                                     | [components.UploadedDate](../../models/components/uploadeddate.md)                 | :heavy_minus_sign:                                                                 | Date that the document was uploaded                                                |                                                                                    |