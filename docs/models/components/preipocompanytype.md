# PreIpoCompanyType

The type of the Pre IPO Company.

## Example Usage

```typescript
import { PreIpoCompanyType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: PreIpoCompanyType = PreIpoCompanyType.CCorporation;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                    | Value                   |
| ----------------------- | ----------------------- |
| `TypeUnspecified`       | TYPE_UNSPECIFIED        |
| `SoleProprietor`        | SOLE_PROPRIETOR         |
| `SingleMemberLlc`       | SINGLE_MEMBER_LLC       |
| `Llc`                   | LLC                     |
| `Partnership`           | PARTNERSHIP             |
| `CCorporation`          | C_CORPORATION           |
| `SCorporation`          | S_CORPORATION           |
| `Trust`                 | TRUST                   |
| `IraOrTaxExempt`        | IRA_OR_TAX_EXEMPT       |
| `NonUsCorporation`      | NON_US_CORPORATION      |
| `PrivateLimitedCompany` | PRIVATE_LIMITED_COMPANY |
| `PublicLimitedCompany`  | PUBLIC_LIMITED_COMPANY  |
| `TaxExemptEntity`       | TAX_EXEMPT_ENTITY       |
| `ForeignTrust`          | FOREIGN_TRUST           |
| `Other`                 | OTHER                   |
| -                       | `Unrecognized<string>`  |