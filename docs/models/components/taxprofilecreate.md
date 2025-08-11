# TaxProfileCreate

Tax Profile pertaining to the Legal Entity or Natural Person.

## Example Usage

```typescript
import { FederalTaxClassification, IrsFormType, TaxProfileCreate, UsTinStatus } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: TaxProfileCreate = {
  federalTaxClassification: FederalTaxClassification.CCorporation,
  irsFormType: IrsFormType.W8Ben,
  legalTaxRegionCode: "US",
  usTinStatus: UsTinStatus.Passing,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `federalTaxClassification`                                                                 | [components.FederalTaxClassification](../../models/components/federaltaxclassification.md) | :heavy_check_mark:                                                                         | Federal tax classification.                                                                | C_CORPORATION                                                                              |
| `irsFormType`                                                                              | [components.IrsFormType](../../models/components/irsformtype.md)                           | :heavy_check_mark:                                                                         | IRS form type.                                                                             | W_8                                                                                        |
| `legalTaxRegionCode`                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | Legal tax region must be "US" if provided W-9, otherwise must be a non-US country.         | US                                                                                         |
| `usTinStatus`                                                                              | [components.UsTinStatus](../../models/components/ustinstatus.md)                           | :heavy_check_mark:                                                                         | United States Individual Taxpayer Identification Number (ITIN) status.                     | PASSING                                                                                    |