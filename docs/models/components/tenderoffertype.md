# TenderOfferType

the type of tender offer

## Example Usage

```typescript
import { TenderOfferType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: TenderOfferType = TenderOfferType.DutchAuction;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                          | Value                         |
| ----------------------------- | ----------------------------- |
| `TenderOfferTypeUnspecified`  | TENDER_OFFER_TYPE_UNSPECIFIED |
| `OddLotTender`                | ODD_LOT_TENDER                |
| `DutchAuction`                | DUTCH_AUCTION                 |
| -                             | `Unrecognized<string>`        |