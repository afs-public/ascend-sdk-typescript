# OptionOrderLegIdentifierType

The format of the identifier value used to look up the security. When `asset_type` is OPTION, the identifier_type must be OSI.

## Example Usage

```typescript
import { OptionOrderLegIdentifierType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OptionOrderLegIdentifierType = OptionOrderLegIdentifierType.Osi;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                            | Value                           |
| ------------------------------- | ------------------------------- |
| `LegIdentifierTypeUnspecified`  | LEG_IDENTIFIER_TYPE_UNSPECIFIED |
| `Osi`                           | OSI                             |
| -                               | `Unrecognized<string>`          |