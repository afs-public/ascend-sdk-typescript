# AlternativeInvestmentIssuerType

The issuer type.

## Example Usage

```typescript
import { AlternativeInvestmentIssuerType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AlternativeInvestmentIssuerType =
  AlternativeInvestmentIssuerType.Llc;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `TypeUnspecified`      | TYPE_UNSPECIFIED       |
| `Corporation`          | CORPORATION            |
| `Llc`                  | LLC                    |
| `LimitedPartnership`   | LIMITED_PARTNERSHIP    |
| `GeneralPartnership`   | GENERAL_PARTNERSHIP    |
| `Trust`                | TRUST                  |
| `Ltd`                  | LTD                    |
| `NoLienLetter`         | NO_LIEN_LETTER         |
| `EntityFormation`      | ENTITY_FORMATION       |
| -                      | `Unrecognized<string>` |