# CancelTradeResponseWhenIssued

Denotes that this trade was either when_issued or when_distributed.

## Example Usage

```typescript
import { CancelTradeResponseWhenIssued } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelTradeResponseWhenIssued =
  CancelTradeResponseWhenIssued.WhenIssued;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                         | Value                        |
| ---------------------------- | ---------------------------- |
| `WhenIssuedTypeUnspecified`  | WHEN_ISSUED_TYPE_UNSPECIFIED |
| `WhenIssued`                 | WHEN_ISSUED                  |
| `WhenDistributed`            | WHEN_DISTRIBUTED             |
| -                            | `Unrecognized<string>`       |