# OpenLotReplacementShareIndicator

Indicates if lot represents wash sale replacement shares.

## Example Usage

```typescript
import { OpenLotReplacementShareIndicator } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OpenLotReplacementShareIndicator =
  OpenLotReplacementShareIndicator.Replacement;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                    | Value                                   |
| --------------------------------------- | --------------------------------------- |
| `ReplacementShareIndicatorUnspecified`  | REPLACEMENT_SHARE_INDICATOR_UNSPECIFIED |
| `Replacement`                           | REPLACEMENT                             |
| -                                       | `Unrecognized<string>`                  |