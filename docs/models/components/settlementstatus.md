# SettlementStatus

Indicates the current status of the settlement process for the deliverable asset(s) tied to an option, such as regular settlement or delayed.

## Example Usage

```typescript
import { SettlementStatus } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: SettlementStatus = SettlementStatus.Regular;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                          | Value                         |
| ----------------------------- | ----------------------------- |
| `SettlementStatusUnspecified` | SETTLEMENT_STATUS_UNSPECIFIED |
| `Regular`                     | REGULAR                       |
| `Delayed`                     | DELAYED                       |
| -                             | `Unrecognized<string>`        |