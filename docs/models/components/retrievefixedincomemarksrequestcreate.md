# RetrieveFixedIncomeMarksRequestCreate

Request object for retrieving fixed income marks

## Example Usage

```typescript
import {
  RetrieveFixedIncomeMarksRequestCreate,
  RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierType,
} from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RetrieveFixedIncomeMarksRequestCreate = {
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
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `parent`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The parent resource where this price will be sourced under. Format: correspondents/{correspondent_id}                                                                    |                                                                                                                                                                          |
| `securityIdentifiers`                                                                                                                                                    | [components.RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreate](../../models/components/retrievefixedincomemarksrequestsecurityidentifierscreate.md)[]             | :heavy_check_mark:                                                                                                                                                       | Identifiers specifying for which assets mark data should be returned. A maximum of 100 identifiers are allowed. At least one identifier must be provided in the request. | [<br/>{<br/>"identifier": "US0378331005",<br/>"identifier_type": "ISIN"<br/>},<br/>{<br/>"identifier": "38259P508",<br/>"identifier_type": "CUSIP"<br/>}<br/>]           |