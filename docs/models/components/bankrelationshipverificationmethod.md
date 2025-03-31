# BankRelationshipVerificationMethod

The verification method of the bank relationship.

## Example Usage

```typescript
import { BankRelationshipVerificationMethod } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BankRelationshipVerificationMethod =
  BankRelationshipVerificationMethod.MicroDeposit;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                            | Value                           |
| ------------------------------- | ------------------------------- |
| `VerificationMethodUnspecified` | VERIFICATION_METHOD_UNSPECIFIED |
| `MicroDeposit`                  | MICRO_DEPOSIT                   |
| `Yodlee`                        | YODLEE                          |
| `Quovo`                         | QUOVO                           |
| `Giact`                         | GIACT                           |
| `Synapse`                       | SYNAPSE                         |
| `Sophtron`                      | SOPHTRON                        |
| `UseExisting`                   | USE_EXISTING                    |
| `InternalBank`                  | INTERNAL_BANK                   |
| `Mx`                            | MX                              |
| `Fiserv`                        | FISERV                          |
| `PlaidToken`                    | PLAID_TOKEN                     |
| -                               | `Unrecognized<string>`          |