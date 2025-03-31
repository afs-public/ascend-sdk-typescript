# EndReason

The end reason of the LTID.

## Example Usage

```typescript
import { EndReason } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EndReason = EndReason.EventReasonEnded;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                        | Value                                       |
| ------------------------------------------- | ------------------------------------------- |
| `ReportableAccountEventReasonUnspecified`   | REPORTABLE_ACCOUNT_EVENT_REASON_UNSPECIFIED |
| `EventReasonCreated`                        | EVENT_REASON_CREATED                        |
| `EventReasonCorrection`                     | EVENT_REASON_CORRECTION                     |
| `EventReasonEnded`                          | EVENT_REASON_ENDED                          |
| `EventReasonReplaced`                       | EVENT_REASON_REPLACED                       |
| `EventReasonTransfer`                       | EVENT_REASON_TRANSFER                       |
| `EventReasonOther`                          | EVENT_REASON_OTHER                          |
| -                                           | `Unrecognized<string>`                      |