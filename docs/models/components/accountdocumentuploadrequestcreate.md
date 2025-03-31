# AccountDocumentUploadRequestCreate

Account document to be uploaded;

## Example Usage

```typescript
import { AccountDocumentUploadRequestCreate, DocumentType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AccountDocumentUploadRequestCreate = {
  accountId: "01HCZ4ZE2248BR4SC6DE5KFF8S",
  correspondentId: "01HPMZZM6RKMVZA1JQ63RQKJRP",
  documentType: DocumentType.FdicSweepProgramAgreement,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `accountId`                                                                                 | *string*                                                                                    | :heavy_check_mark:                                                                          | Identifies the account relevant to the document; Required for all account documents         | 01HCZ4ZE2248BR4SC6DE5KFF8S                                                                  |
| `correspondentId`                                                                           | *string*                                                                                    | :heavy_check_mark:                                                                          | Identifies the correspondent relevant to the document; Required for all account documents   | 01HPMZZM6RKMVZA1JQ63RQKJRP                                                                  |
| `documentType`                                                                              | [components.DocumentType](../../models/components/documenttype.md)                          | :heavy_check_mark:                                                                          | Describes the contents of a document and how it is used; Required for all account documents | FDIC_SWEEP_PROGRAM_AGREEMENT                                                                |