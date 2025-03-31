# InvestorDocument

Fields specific to an investor document

## Example Usage

```typescript
import { InvestorDocument } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: InvestorDocument = {};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                        | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Identifies the account relevant to the document                                                                    | 01HCZ4ZE2248BR4SC6DE5KFF8S                                                                                         |
| `documentType`                                                                                                     | [components.DocumentInvestorDocumentDocumentType](../../models/components/documentinvestordocumentdocumenttype.md) | :heavy_minus_sign:                                                                                                 | Describes the contents of a document and how it is used                                                            | CONFIRM_DAILY                                                                                                      |
| `processDate`                                                                                                      | [components.DocumentProcessDate](../../models/components/documentprocessdate.md)                                   | :heavy_minus_sign:                                                                                                 | Date that the related activities were processed                                                                    |                                                                                                                    |