# IdentifierUpdateType

The type of identifier

## Example Usage

```typescript
import { IdentifierUpdateType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: IdentifierUpdateType = IdentifierUpdateType.OriginatingAccountId;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                         | Value                        |
| ---------------------------- | ---------------------------- |
| `IdentifierTypeUnspecified`  | IDENTIFIER_TYPE_UNSPECIFIED  |
| `OriginatingAccountId`       | ORIGINATING_ACCOUNT_ID       |
| `OriginatingFdid`            | ORIGINATING_FDID             |
| `OriginatingCatReporterCrd`  | ORIGINATING_CAT_REPORTER_CRD |
| `ClientAccountId`            | CLIENT_ACCOUNT_ID            |
| -                            | `Unrecognized<string>`       |