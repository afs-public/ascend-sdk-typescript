# ForeignIdentification

**Field Dependencies:**

Required if `irs_form_type` is `W_8BEN`.

Otherwise, must be empty.

## Example Usage

```typescript
import { ForeignIdentification } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ForeignIdentification = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `expirationDate`                                                                       | [components.ExpirationDate](../../models/components/expirationdate.md)                 | :heavy_minus_sign:                                                                     | Identification expiration date                                                         | {<br/>"day": 21,<br/>"month": 9,<br/>"year": 2029<br/>}                                |
| `ftin`                                                                                 | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Denotes if the identification is a tax id or other                                     | true                                                                                   |
| `identificationNumber`                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | Identification number                                                                  | M1C1W7GQSK                                                                             |
| `issueDate`                                                                            | [components.IssueDate](../../models/components/issuedate.md)                           | :heavy_minus_sign:                                                                     | Identification issue date                                                              | {<br/>"day": 21,<br/>"month": 9,<br/>"year": 2024<br/>}                                |
| `issuingRegionCode`                                                                    | *string*                                                                               | :heavy_minus_sign:                                                                     | Region of issuance must be provided as a two-character CLDR country code               | CA                                                                                     |
| `type`                                                                                 | [components.LegalNaturalPersonType](../../models/components/legalnaturalpersontype.md) | :heavy_minus_sign:                                                                     | Identification type                                                                    | PASSPORT                                                                               |