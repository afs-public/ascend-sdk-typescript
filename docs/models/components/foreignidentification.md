# ForeignIdentification

Foreign identification. Must be provided if the person does not have a U.S. tax ID

## Example Usage

```typescript
import { ForeignIdentification } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ForeignIdentification = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `expirationDate`                                                                       | [components.ExpirationDate](../../models/components/expirationdate.md)                 | :heavy_minus_sign:                                                                     | Identification expiration date                                                         | 2029-09-21 00:00:00 +0000 UTC                                                          |
| `ftin`                                                                                 | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Denotes if the identification is a tax id or other                                     | true                                                                                   |
| `identificationNumber`                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | Identification number                                                                  | M1C1W7GQSK                                                                             |
| `issueDate`                                                                            | [components.IssueDate](../../models/components/issuedate.md)                           | :heavy_minus_sign:                                                                     | Identification issue date                                                              | 2024-09-21 00:00:00 +0000 UTC                                                          |
| `issuingRegionCode`                                                                    | *string*                                                                               | :heavy_minus_sign:                                                                     | Region of issuance must be provided as a two-character CLDR country code               | CA                                                                                     |
| `type`                                                                                 | [components.LegalNaturalPersonType](../../models/components/legalnaturalpersontype.md) | :heavy_minus_sign:                                                                     | Identification type                                                                    | PASSPORT                                                                               |