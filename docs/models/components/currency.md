# Currency

Currency specific asset details

## Example Usage

```typescript
import { Currency } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Currency = {};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `currencyType`                                                                                                    | [components.CurrencyType](../../models/components/currencytype.md)                                                | :heavy_minus_sign:                                                                                                | Indicates the type of currency                                                                                    | CURRENCY                                                                                                          |
| `paymentCurrency`                                                                                                 | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Indicates the name of asset for the underlying payment_currency when the `currency_type` is `CURRENCY_EQUIVALENT` | assets/8395                                                                                                       |