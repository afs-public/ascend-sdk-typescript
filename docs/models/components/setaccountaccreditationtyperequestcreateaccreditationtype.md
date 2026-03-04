# SetAccountAccreditationTypeRequestCreateAccreditationType

The new accreditation type for the specified account.

## Example Usage

```typescript
import { SetAccountAccreditationTypeRequestCreateAccreditationType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: SetAccountAccreditationTypeRequestCreateAccreditationType =
  SetAccountAccreditationTypeRequestCreateAccreditationType.NetWorthGt1M;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                           | Value                          |
| ------------------------------ | ------------------------------ |
| `AccreditationTypeUnspecified` | ACCREDITATION_TYPE_UNSPECIFIED |
| `NetWorthGt1M`                 | NET_WORTH_GT_1M                |
| `IndividualIncomeGt200K`       | INDIVIDUAL_INCOME_GT_200K      |
| `JointIncomeGt300K`            | JOINT_INCOME_GT_300K           |
| `ProfessionDesignation`        | PROFESSION_DESIGNATION         |
| `TrustGt5M`                    | TRUST_GT_5M                    |
| `GrantorsAccredited`           | GRANTORS_ACCREDITED            |
| `EquityOwnersAccredited`       | EQUITY_OWNERS_ACCREDITED       |
| `TotalAssetsGt5M`              | TOTAL_ASSETS_GT_5M             |
| `InvestmentCompany`            | INVESTMENT_COMPANY             |
| `SecOrExemptAdvisor`           | SEC_OR_EXEMPT_ADVISOR          |
| `KnowledgeableEmployee`        | KNOWLEDGEABLE_EMPLOYEE         |
| `KnowledgeableExecutive`       | KNOWLEDGEABLE_EXECUTIVE        |
| `FamilyOfficeGt5M`             | FAMILY_OFFICE_GT_5M            |
| `NotAccredited`                | NOT_ACCREDITED                 |
| -                              | `Unrecognized<string>`         |