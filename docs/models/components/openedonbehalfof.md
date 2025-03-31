# OpenedOnBehalfOf

Trust account is opened on behalf of

## Example Usage

```typescript
import { OpenedOnBehalfOf } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OpenedOnBehalfOf = OpenedOnBehalfOf.PersonalTrust;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                            | Value                           |
| ------------------------------- | ------------------------------- |
| `OpenedOnBehalfOfUnspecified`   | OPENED_ON_BEHALF_OF_UNSPECIFIED |
| `PersonalTrust`                 | PERSONAL_TRUST                  |
| `BusinessTrust`                 | BUSINESS_TRUST                  |
| `ThirdPartyAdministrator`       | THIRD_PARTY_ADMINISTRATOR       |
| -                               | `Unrecognized<string>`          |