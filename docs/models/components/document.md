# Document

Describes a document that has been uploaded to Apex storage.

## Example Usage

```typescript
import { Document } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Document = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `accountDocument`                                                                        | [components.AccountDocument](../../models/components/accountdocument.md)                 | :heavy_minus_sign:                                                                       | Fields specific to an account document                                                   |                                                                                          |
| `correspondentId`                                                                        | *string*                                                                                 | :heavy_minus_sign:                                                                       | Identifies the correspondent relevant to the document                                    | 01HPMZZM6RKMVZA1JQ63RQKJRP                                                               |
| `downloadLink`                                                                           | *string*                                                                                 | :heavy_minus_sign:                                                                       | Signed link used to download a document; The link expires one hour after being generated | https://cloud.storage.com/passport.jpeg?date=20231231T132132Z&expires=3600               |
| `idDocument`                                                                             | [components.IdDocument](../../models/components/iddocument.md)                           | :heavy_minus_sign:                                                                       | Fields specific to an identity document                                                  |                                                                                          |
| `investorDocument`                                                                       | [components.InvestorDocument](../../models/components/investordocument.md)               | :heavy_minus_sign:                                                                       | Fields specific to an investor document                                                  |                                                                                          |
| `name`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | Identifier for the document                                                              | documents/dd802bfe-35f2-41e7-8372-e626685f22dc                                           |