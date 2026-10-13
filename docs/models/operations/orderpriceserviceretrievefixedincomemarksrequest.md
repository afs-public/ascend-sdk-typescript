# OrderPriceServiceRetrieveFixedIncomeMarksRequest

## Example Usage

```typescript
import { RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierType } from "@apexfintechsolutions/ascend-sdk/models/components";
import { OrderPriceServiceRetrieveFixedIncomeMarksRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: OrderPriceServiceRetrieveFixedIncomeMarksRequest = {
  correspondentId: "01HBRQ5BW6ZAY4BNWP4GWRD80X",
  retrieveFixedIncomeMarksRequestCreate: {
    parent: "correspondents/01HBRQ5BW6ZAY4BNWP4GWRD80X",
    securityIdentifiers: [
      {
        identifier: "US0378331005",
        identifierType:
          RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierType
            .Isin,
      },
      {
        identifier: "38259P508",
        identifierType:
          RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierType
            .Cusip,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `correspondentId`                                                                                                    | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The correspondent id.                                                                                                | 01HBRQ5BW6ZAY4BNWP4GWRD80X                                                                                           |
| `retrieveFixedIncomeMarksRequestCreate`                                                                              | [components.RetrieveFixedIncomeMarksRequestCreate](../../models/components/retrievefixedincomemarksrequestcreate.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |