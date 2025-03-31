# RetrieveQuoteResponseIdentifierType

The identifier type of the asset for which the best bid and offer is returned. This will be the same value as what was sent on the request.

## Example Usage

```typescript
import { RetrieveQuoteResponseIdentifierType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RetrieveQuoteResponseIdentifierType =
  RetrieveQuoteResponseIdentifierType.Cusip;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `AssetId`              | ASSET_ID               |
| `Cusip`                | CUSIP                  |
| `Isin`                 | ISIN                   |
| -                      | `Unrecognized<string>` |