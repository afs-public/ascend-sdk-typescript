# Holding

Holding is one position evaluated for an ACATS transfer, carrying the identity and display data needed to prefill the transfer.

## Example Usage

```typescript
import { Holding } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Holding = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `assetId`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | Apex asset id. Unset if the asset could not be identified.                           | 8395                                                                                 |
| `assetType`                                                                          | [components.AcatsHoldingAssetType](../../models/components/acatsholdingassettype.md) | :heavy_minus_sign:                                                                   | Asset type, aligned with supported ACATS asset classes.                              | EQUITY                                                                               |
| `cusip`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | CUSIP identifier.                                                                    | 037833100                                                                            |
| `description`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | Human-readable security name for display.                                            | Apple Inc.                                                                           |
| `isin`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | ISIN identifier.                                                                     | US0378331005                                                                         |
| `quantity`                                                                           | [components.HoldingQuantity](../../models/components/holdingquantity.md)             | :heavy_minus_sign:                                                                   | Number of units held (or cash amount for cash holdings).                             | {<br/>"value": "100.5"<br/>}                                                         |
| `symbol`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | Trading symbol.                                                                      | AAPL                                                                                 |