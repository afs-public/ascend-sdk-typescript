# AlternativeInvestmentRegistrationType

The issuer’s registration type.

## Example Usage

```typescript
import { AlternativeInvestmentRegistrationType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AlternativeInvestmentRegistrationType =
  AlternativeInvestmentRegistrationType.Ria;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                          | Value                         |
| ----------------------------- | ----------------------------- |
| `RegistrationTypeUnspecified` | REGISTRATION_TYPE_UNSPECIFIED |
| `Other`                       | OTHER                         |
| `BrokerDealer`                | BROKER_DEALER                 |
| `ExemptReportingAdvisor`      | EXEMPT_REPORTING_ADVISOR      |
| `Ria`                         | RIA                           |
| -                             | `Unrecognized<string>`        |