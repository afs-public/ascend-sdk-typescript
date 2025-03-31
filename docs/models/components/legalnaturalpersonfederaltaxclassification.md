# LegalNaturalPersonFederalTaxClassification

Federal tax classification.

## Example Usage

```typescript
import { LegalNaturalPersonFederalTaxClassification } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: LegalNaturalPersonFederalTaxClassification =
  LegalNaturalPersonFederalTaxClassification.CCorporation;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                   | Value                                  |
| -------------------------------------- | -------------------------------------- |
| `FederalTaxClassificationUnspecified`  | FEDERAL_TAX_CLASSIFICATION_UNSPECIFIED |
| `IndivSolepropOrSinglememberllc`       | INDIV_SOLEPROP_OR_SINGLEMEMBERLLC      |
| `Partnership`                          | PARTNERSHIP                            |
| `CCorporation`                         | C_CORPORATION                          |
| `SCorporation`                         | S_CORPORATION                          |
| `TrustEstate`                          | TRUST_ESTATE                           |
| `LlcTaxedAsCCorp`                      | LLC_TAXED_AS_C_CORP                    |
| `LlcTaxedAsSCorp`                      | LLC_TAXED_AS_S_CORP                    |
| `LlcTaxedAsPartnership`                | LLC_TAXED_AS_PARTNERSHIP               |
| `Other`                                | OTHER                                  |
| -                                      | `Unrecognized<string>`                 |