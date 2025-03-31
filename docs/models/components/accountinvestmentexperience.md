# AccountInvestmentExperience

Investment experience.

## Example Usage

```typescript
import { AccountInvestmentExperience } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AccountInvestmentExperience = AccountInvestmentExperience.Good;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                              | Value                             |
| --------------------------------- | --------------------------------- |
| `InvestmentExperienceUnspecified` | INVESTMENT_EXPERIENCE_UNSPECIFIED |
| `None`                            | NONE                              |
| `Limited`                         | LIMITED                           |
| `Good`                            | GOOD                              |
| `Extensive`                       | EXTENSIVE                         |
| -                                 | `Unrecognized<string>`            |