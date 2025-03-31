# DocumentInvestorDocumentDocumentType

Describes the contents of a document and how it is used

## Example Usage

```typescript
import { DocumentInvestorDocumentDocumentType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: DocumentInvestorDocumentDocumentType =
  DocumentInvestorDocumentDocumentType.ConfirmDaily;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                               | Value                              |
| ---------------------------------- | ---------------------------------- |
| `InvestorDocumentTypeUnspecified`  | INVESTOR_DOCUMENT_TYPE_UNSPECIFIED |
| `ConfirmDaily`                     | CONFIRM_DAILY                      |
| `ConfirmMonthly`                   | CONFIRM_MONTHLY                    |
| `FormConsolidated1099`             | FORM_CONSOLIDATED_1099             |
| `Form1042S`                        | FORM_1042_S                        |
| `Form1099Q`                        | FORM_1099_Q                        |
| `Form1099R`                        | FORM_1099_R                        |
| `Form2439`                         | FORM_2439                          |
| `Form4806A`                        | FORM_480_6A                        |
| `Form4806B`                        | FORM_480_6B                        |
| `Form5498`                         | FORM_5498                          |
| `StatementMonthly`                 | STATEMENT_MONTHLY                  |
| `StatementQuarterly`               | STATEMENT_QUARTERLY                |
| `Form1099C`                        | FORM_1099_C                        |
| `Form4806D`                        | FORM_480_6D                        |
| `Form5498Esa`                      | FORM_5498_ESA                      |
| -                                  | `Unrecognized<string>`             |