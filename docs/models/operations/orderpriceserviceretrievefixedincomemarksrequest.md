# OrderPriceServiceRetrieveFixedIncomeMarksRequest

## Example Usage

```typescript
import { RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierType } from "@apexfintechsolutions/ascend-sdk/models/components";
import { OrderPriceServiceRetrieveFixedIncomeMarksRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: OrderPriceServiceRetrieveFixedIncomeMarksRequest = {
  correspondentId: "<id>",
  retrieveFixedIncomeMarksRequestCreate: {
    parent: "<value>",
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

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `correspondentId`                                                                                                    | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The correspondent id.                                                                                                |
| `retrieveFixedIncomeMarksRequestCreate`                                                                              | [components.RetrieveFixedIncomeMarksRequestCreate](../../models/components/retrievefixedincomemarksrequestcreate.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |