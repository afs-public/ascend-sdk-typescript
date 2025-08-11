# AcceptTransferResponseRejectCode

The reject code

## Example Usage

```typescript
import { AcceptTransferResponseRejectCode } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AcceptTransferResponseRejectCode =
  AcceptTransferResponseRejectCode.RejectCodeAccountFlat;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                                         | Value                                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `RejectCodeUnspecified`                                      | REJECT_CODE_UNSPECIFIED                                      |
| `RejectCodeSsnTaxIdMismatch`                                 | REJECT_CODE_SSN_TAX_ID_MISMATCH                              |
| `RejectCodeAccountTitleMismatch`                             | REJECT_CODE_ACCOUNT_TITLE_MISMATCH                           |
| `RejectCodeDocumentationNeeded`                              | REJECT_CODE_DOCUMENTATION_NEEDED                             |
| `RejectCodeAccountFlat`                                      | REJECT_CODE_ACCOUNT_FLAT                                     |
| `RejectCodeInvalidAccountNumber`                             | REJECT_CODE_INVALID_ACCOUNT_NUMBER                           |
| `RejectCodeDuplicate`                                        | REJECT_CODE_DUPLICATE                                        |
| `RejectCodeAccountInDistributionOrTransfer`                  | REJECT_CODE_ACCOUNT_IN_DISTRIBUTION_OR_TRANSFER              |
| `RejectCodeClientRescinded`                                  | REJECT_CODE_CLIENT_RESCINDED                                 |
| `RejectCodeMissingAuthorizationSignature`                    | REJECT_CODE_MISSING_AUTHORIZATION_SIGNATURE                  |
| `RejectCodeAccountViolatesCreditPolicyOfReceivingFirm`       | REJECT_CODE_ACCOUNT_VIOLATES_CREDIT_POLICY_OF_RECEIVING_FIRM |
| `RejectCodeUnrecognizedForResidualCreditBalance`             | REJECT_CODE_UNRECOGNIZED_FOR_RESIDUAL_CREDIT_BALANCE         |
| `RejectCodePartialTransferDeliverer`                         | REJECT_CODE_PARTIAL_TRANSFER_DELIVERER                       |
| `RejectCodeFailReversal`                                     | REJECT_CODE_FAIL_REVERSAL                                    |
| `RejectCodeReclaim`                                          | REJECT_CODE_RECLAIM                                          |
| `RejectCodeMutualFundCleanup`                                | REJECT_CODE_MUTUAL_FUND_CLEANUP                              |
| -                                                            | `Unrecognized<string>`                                       |