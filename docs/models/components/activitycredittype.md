# ActivityCreditType

Further detail describing the type of credit

## Example Usage

```typescript
import { ActivityCreditType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityCreditType = ActivityCreditType.WriteOff;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                         | Value                        |
| ---------------------------- | ---------------------------- |
| `CreditTypeUnspecified`      | CREDIT_TYPE_UNSPECIFIED      |
| `FullyPaidStockLoan`         | FULLY_PAID_STOCK_LOAN        |
| `WriteOff`                   | WRITE_OFF                    |
| `Reimbursement`              | REIMBURSEMENT                |
| `Promotional`                | PROMOTIONAL                  |
| `FdicInsuredDepositProgram`  | FDIC_INSURED_DEPOSIT_PROGRAM |
| `AccountTransferAdjustment`  | ACCOUNT_TRANSFER_ADJUSTMENT  |
| -                            | `Unrecognized<string>`       |