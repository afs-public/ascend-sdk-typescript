# ReplacementShareIndicator

Indicates if lot represents wash sale replacement shares.

## Example Usage

```typescript
import { ReplacementShareIndicator } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ReplacementShareIndicator = ReplacementShareIndicator.Replacement;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                    | Value                                   |
| --------------------------------------- | --------------------------------------- |
| `ReplacementShareIndicatorUnspecified`  | REPLACEMENT_SHARE_INDICATOR_UNSPECIFIED |
| `Replacement`                           | REPLACEMENT                             |
| -                                       | `Unrecognized<string>`                  |