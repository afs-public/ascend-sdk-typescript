# PartyRequestUpdateRelationType

Conveys how a person is related to account; Located on each account Party record; Examples are `PRIMARY_OWNER`, `JOINT_OWNER`, `EXECUTOR`, etc.

## Example Usage

```typescript
import { PartyRequestUpdateRelationType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: PartyRequestUpdateRelationType =
  PartyRequestUpdateRelationType.PrimaryOwner;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                            | Value                           |
| ------------------------------- | ------------------------------- |
| `PartyRelationTypeUnspecified`  | PARTY_RELATION_TYPE_UNSPECIFIED |
| `PrimaryOwner`                  | PRIMARY_OWNER                   |
| `JointOwner`                    | JOINT_OWNER                     |
| `Custodian`                     | CUSTODIAN                       |
| `GuardianConservator`           | GUARDIAN_CONSERVATOR            |
| `PowerOfAttorney`               | POWER_OF_ATTORNEY               |
| `Executor`                      | EXECUTOR                        |
| `AuthorizedSigner`              | AUTHORIZED_SIGNER               |
| `BeneficialOwner`               | BENEFICIAL_OWNER                |
| `ControlPerson`                 | CONTROL_PERSON                  |
| `AuthorizedRepresentative`      | AUTHORIZED_REPRESENTATIVE       |
| `Trustee`                       | TRUSTEE                         |
| `AuthTrusteeRep`                | AUTH_TRUSTEE_REP                |
| -                               | `Unrecognized<string>`          |