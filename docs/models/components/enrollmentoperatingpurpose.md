# EnrollmentOperatingPurpose

The purpose of the operating account.

## Example Usage

```typescript
import { EnrollmentOperatingPurpose } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EnrollmentOperatingPurpose = EnrollmentOperatingPurpose.Custody;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                          | Value                         |
| ----------------------------- | ----------------------------- |
| `OperatingPurposeUnspecified` | OPERATING_PURPOSE_UNSPECIFIED |
| `Custody`                     | CUSTODY                       |
| `SecFee`                      | SEC_FEE                       |
| `TafFee`                      | TAF_FEE                       |
| `TefraWithholding`            | TEFRA_WITHHOLDING             |
| `Suspense`                    | SUSPENSE                      |
| `Allocation`                  | ALLOCATION                    |
| `Error`                       | ERROR                         |
| `Deposit`                     | DEPOSIT                       |
| `WriteOff`                    | WRITE_OFF                     |
| `UnsecuredReserve`            | UNSECURED_RESERVE             |
| `Payable`                     | PAYABLE                       |
| `Commission`                  | COMMISSION                    |
| `Escheatment`                 | ESCHEATMENT                   |
| `InterestRevenue`             | INTEREST_REVENUE              |
| `StreetDepository`            | STREET_DEPOSITORY             |
| `Inventory`                   | INVENTORY                     |
| `TaxWithholding`              | TAX_WITHHOLDING               |
| `Fee`                         | FEE                           |
| `PrincipalTrading`            | PRINCIPAL_TRADING             |
| -                             | `Unrecognized<string>`        |