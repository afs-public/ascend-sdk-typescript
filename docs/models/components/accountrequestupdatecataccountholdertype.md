# AccountRequestUpdateCatAccountHolderType

The FINRA CAT classification for the Account Holder; Is set automatically based on attributes of the owners and account type

## Example Usage

```typescript
import { AccountRequestUpdateCatAccountHolderType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AccountRequestUpdateCatAccountHolderType =
  AccountRequestUpdateCatAccountHolderType.IIndividual;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                | Value                               |
| ----------------------------------- | ----------------------------------- |
| `CatAccountHolderTypeUnspecified`   | CAT_ACCOUNT_HOLDER_TYPE_UNSPECIFIED |
| `AInstitutionalCustomer`            | A_INSTITUTIONAL_CUSTOMER            |
| `EEmployeeAccount`                  | E_EMPLOYEE_ACCOUNT                  |
| `FForeign`                          | F_FOREIGN                           |
| `IIndividual`                       | I_INDIVIDUAL                        |
| `OMarketMaking`                     | O_MARKET_MAKING                     |
| `VAgencyAveragePriceAccount`        | V_AGENCY_AVERAGE_PRICE_ACCOUNT      |
| `POtherProprietary`                 | P_OTHER_PROPRIETARY                 |
| `XErrorAccount`                     | X_ERROR_ACCOUNT                     |
| -                                   | `Unrecognized<string>`              |