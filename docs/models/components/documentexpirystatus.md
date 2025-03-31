# DocumentExpiryStatus

Whether or not the document expiry was verified This is only in scope for document verification checks If document is expired this will be set to EXPIRED

## Example Usage

```typescript
import { DocumentExpiryStatus } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: DocumentExpiryStatus = DocumentExpiryStatus.Unexpired;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                         | Value                        |
| ---------------------------- | ---------------------------- |
| `ExpirationStateUnspecified` | EXPIRATION_STATE_UNSPECIFIED |
| `Unexpired`                  | UNEXPIRED                    |
| `Expired`                    | EXPIRED                      |
| `NotApplicable`              | NOT_APPLICABLE               |
| -                            | `Unrecognized<string>`       |