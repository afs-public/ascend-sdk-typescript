# RetrieveQuoteRequestCreateIdentifierType

The identifier type of the asset being sought

## Example Usage

```typescript
import { RetrieveQuoteRequestCreateIdentifierType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RetrieveQuoteRequestCreateIdentifierType =
  RetrieveQuoteRequestCreateIdentifierType.Cusip;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `AssetId`              | ASSET_ID               |
| `Cusip`                | CUSIP                  |
| `Isin`                 | ISIN                   |
| -                      | `Unrecognized<string>` |