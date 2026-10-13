# OrderPriceServiceRetrieveQuoteRequest

## Example Usage

```typescript
import { RetrieveQuoteRequestCreateAssetType, RetrieveQuoteRequestCreateIdentifierType } from "@apexfintechsolutions/ascend-sdk/models/components";
import { OrderPriceServiceRetrieveQuoteRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: OrderPriceServiceRetrieveQuoteRequest = {
  accountId: "01HBRQ5BW6ZAY4BNWP4GWRD80X",
  retrieveQuoteRequestCreate: {
    assetType: RetrieveQuoteRequestCreateAssetType.FixedIncome,
    identifier: "037833100",
    identifierType: RetrieveQuoteRequestCreateIdentifierType.Cusip,
    parent: "accounts/01HBRQ5BW6ZAY4BNWP4GWRD80X",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `accountId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | The account id.                                                                                | 01HBRQ5BW6ZAY4BNWP4GWRD80X                                                                     |
| `retrieveQuoteRequestCreate`                                                                   | [components.RetrieveQuoteRequestCreate](../../models/components/retrievequoterequestcreate.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |