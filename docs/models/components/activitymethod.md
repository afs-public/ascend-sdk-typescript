# ActivityMethod

The method used for the account transfer

## Example Usage

```typescript
import { ActivityMethod } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityMethod = ActivityMethod.Acats;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                | Value                               |
| ----------------------------------- | ----------------------------------- |
| `AccountTransferMethodUnspecified`  | ACCOUNT_TRANSFER_METHOD_UNSPECIFIED |
| `Acats`                             | ACATS                               |
| `Internal`                          | INTERNAL                            |
| `Manual`                            | MANUAL                              |
| -                                   | `Unrecognized<string>`              |