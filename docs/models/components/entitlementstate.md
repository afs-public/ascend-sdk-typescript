# EntitlementState

GRANTED if it was activated via an enrollment, SUSPENDED if a restriction has temporarily disabled it, or DENIED if it has never before been GRANTED

## Example Usage

```typescript
import { EntitlementState } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EntitlementState = EntitlementState.Granted;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                          | Value                         |
| ----------------------------- | ----------------------------- |
| `EntitlementStateUnspecified` | ENTITLEMENT_STATE_UNSPECIFIED |
| `Granted`                     | GRANTED                       |
| `Suspended`                   | SUSPENDED                     |
| `Denied`                      | DENIED                        |
| -                             | `Unrecognized<string>`        |