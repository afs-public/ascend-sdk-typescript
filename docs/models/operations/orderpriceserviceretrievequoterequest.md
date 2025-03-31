# OrderPriceServiceRetrieveQuoteRequest

## Example Usage

```typescript
import { RetrieveQuoteRequestCreateAssetType, RetrieveQuoteRequestCreateIdentifierType } from "@apexfintechsolutions/ascend-sdk/models/components";
import { OrderPriceServiceRetrieveQuoteRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: OrderPriceServiceRetrieveQuoteRequest = {
  accountId: "<id>",
  retrieveQuoteRequestCreate: {
    assetType: RetrieveQuoteRequestCreateAssetType.FixedIncome,
    identifier: "37833100",
    identifierType: RetrieveQuoteRequestCreateIdentifierType.Cusip,
    parent: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `accountId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | The account id.                                                                                |
| `retrieveQuoteRequestCreate`                                                                   | [components.RetrieveQuoteRequestCreate](../../models/components/retrievequoterequestcreate.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |