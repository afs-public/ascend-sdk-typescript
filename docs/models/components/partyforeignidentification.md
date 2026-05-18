# PartyForeignIdentification

**Field Dependencies:**

Required if `irs_form_type` is `W_8BEN`.

Otherwise, must be empty.

## Example Usage

```typescript
import { PartyForeignIdentification } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: PartyForeignIdentification = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `expirationDate`                                                                                 | [components.PartyExpirationDate](../../models/components/partyexpirationdate.md)                 | :heavy_minus_sign:                                                                               | Identification expiration date                                                                   | {<br/>"day": 21,<br/>"month": 9,<br/>"year": 2029<br/>}                                          |
| `ftin`                                                                                           | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Denotes if the identification is a tax id or other                                               | true                                                                                             |
| `identificationNumber`                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | Identification number                                                                            | M1C1W7GQSK                                                                                       |
| `issueDate`                                                                                      | [components.PartyIssueDate](../../models/components/partyissuedate.md)                           | :heavy_minus_sign:                                                                               | Identification issue date                                                                        | {<br/>"day": 21,<br/>"month": 9,<br/>"year": 2024<br/>}                                          |
| `issuingRegionCode`                                                                              | *string*                                                                                         | :heavy_minus_sign:                                                                               | Region of issuance must be provided as a two-character CLDR country code                         | CA                                                                                               |
| `type`                                                                                           | [components.PartyLegalNaturalPersonType](../../models/components/partylegalnaturalpersontype.md) | :heavy_minus_sign:                                                                               | Identification type                                                                              | PASSPORT                                                                                         |