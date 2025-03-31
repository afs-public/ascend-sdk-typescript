# CurrencyType

Indicates the type of currency

## Example Usage

```typescript
import { CurrencyType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CurrencyType = CurrencyType.Currency;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                      | Value                     |
| ------------------------- | ------------------------- |
| `CurrencyTypeUnspecified` | CURRENCY_TYPE_UNSPECIFIED |
| `Currency`                | CURRENCY                  |
| `CurrencyEquivalent`      | CURRENCY_EQUIVALENT       |
| -                         | `Unrecognized<string>`    |