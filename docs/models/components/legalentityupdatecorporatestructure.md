# LegalEntityUpdateCorporateStructure

Corporate structure of the entity.

## Example Usage

```typescript
import { LegalEntityUpdateCorporateStructure } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: LegalEntityUpdateCorporateStructure =
  LegalEntityUpdateCorporateStructure.CorporationCCorp;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                   | Value                                  |
| -------------------------------------- | -------------------------------------- |
| `EntityCorporateStructureUnspecified`  | ENTITY_CORPORATE_STRUCTURE_UNSPECIFIED |
| `CorporationCCorp`                     | CORPORATION_C_CORP                     |
| `CorporationSCorp`                     | CORPORATION_S_CORP                     |
| `CorporationBCorp`                     | CORPORATION_B_CORP                     |
| `CorporationNonprofit`                 | CORPORATION_NONPROFIT                  |
| -                                      | `Unrecognized<string>`                 |