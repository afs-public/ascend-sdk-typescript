# PartyResidencyStatus

## Example Usage

```typescript
import { PartyResidencyStatus } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: PartyResidencyStatus = PartyResidencyStatus.UsPermanentResident;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                         | Value                        |
| ---------------------------- | ---------------------------- |
| `ResidencyStatusUnspecified` | RESIDENCY_STATUS_UNSPECIFIED |
| `UsPermanentResident`        | US_PERMANENT_RESIDENT        |
| `UsTemporaryResident`        | US_TEMPORARY_RESIDENT        |
| `UsNonResident`              | US_NON_RESIDENT              |
| -                            | `Unrecognized<string>`       |