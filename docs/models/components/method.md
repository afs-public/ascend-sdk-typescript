# Method

the method used for the account transfer

## Example Usage

```typescript
import { Method } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Method = Method.Acats;
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