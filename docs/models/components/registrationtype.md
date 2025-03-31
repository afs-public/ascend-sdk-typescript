# RegistrationType

The registration of the account (e.g. Individual, Joint, IRA, etc.)

## Example Usage

```typescript
import { RegistrationType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RegistrationType = RegistrationType.IndividualRegistration;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                           | Value                                          |
| ---------------------------------------------- | ---------------------------------------------- |
| `RegistrationTypeUnspecified`                  | REGISTRATION_TYPE_UNSPECIFIED                  |
| `IndividualRegistration`                       | INDIVIDUAL_REGISTRATION                        |
| `EstateRegistration`                           | ESTATE_REGISTRATION                            |
| `TraditionalIraRegistration`                   | TRADITIONAL_IRA_REGISTRATION                   |
| `SimpleIraRegistration`                        | SIMPLE_IRA_REGISTRATION                        |
| `SepIraRegistration`                           | SEP_IRA_REGISTRATION                           |
| `RothIraRegistration`                          | ROTH_IRA_REGISTRATION                          |
| `RolloverIraRegistration`                      | ROLLOVER_IRA_REGISTRATION                      |
| `JointWithRightsOfSurvivorshipRegistration`    | JOINT_WITH_RIGHTS_OF_SURVIVORSHIP_REGISTRATION |
| `JointTenantsInCommonRegistration`             | JOINT_TENANTS_IN_COMMON_REGISTRATION           |
| `JointTenantsByEntiretyRegistration`           | JOINT_TENANTS_BY_ENTIRETY_REGISTRATION         |
| `JointCommunityPropertyRegistration`           | JOINT_COMMUNITY_PROPERTY_REGISTRATION          |
| `TrustRegistration`                            | TRUST_REGISTRATION                             |
| `CorporationRegistration`                      | CORPORATION_REGISTRATION                       |
| `LlcRegistration`                              | LLC_REGISTRATION                               |
| `PartnershipRegistration`                      | PARTNERSHIP_REGISTRATION                       |
| `OperatingRegistration`                        | OPERATING_REGISTRATION                         |
| `IraBeneficiaryTraditionalRegistration`        | IRA_BENEFICIARY_TRADITIONAL_REGISTRATION       |
| `IraBeneficiaryRothRegistration`               | IRA_BENEFICIARY_ROTH_REGISTRATION              |
| `ForeignIndividualRegistration`                | FOREIGN_INDIVIDUAL_REGISTRATION                |
| `CustodialRegistration`                        | CUSTODIAL_REGISTRATION                         |
| -                                              | `Unrecognized<string>`                         |