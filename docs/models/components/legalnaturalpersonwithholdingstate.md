# LegalNaturalPersonWithholdingState

B/C Notice status.

## Example Usage

```typescript
import { LegalNaturalPersonWithholdingState } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: LegalNaturalPersonWithholdingState =
  LegalNaturalPersonWithholdingState.FirstBNoticeReceived;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                           | Value                          |
| ------------------------------ | ------------------------------ |
| `WithholdingStateUnspecified`  | WITHHOLDING_STATE_UNSPECIFIED  |
| `FirstBNoticeReceived`         | FIRST_B_NOTICE_RECEIVED        |
| `SecondBNoticeReceived`        | SECOND_B_NOTICE_RECEIVED       |
| `CNoticeReceived`              | C_NOTICE_RECEIVED              |
| `CNoticeIndicatedByCustomer`   | C_NOTICE_INDICATED_BY_CUSTOMER |
| -                              | `Unrecognized<string>`         |