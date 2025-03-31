# RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreate

The identifier for the asset.

## Example Usage

```typescript
import {
  RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreate,
  RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierType,
} from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreate = {
  identifier: "37833100",
  identifierType:
    RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierType
      .Cusip,
};
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            | Example                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `identifier`                                                                                                                                                                           | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | Identifier of the asset (of the type specified in `identifier_type`).                                                                                                                  | 3.78331e+07                                                                                                                                                                            |
| `identifierType`                                                                                                                                                                       | [components.RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierType](../../models/components/retrievefixedincomemarksrequestsecurityidentifierscreateidentifiertype.md) | :heavy_check_mark:                                                                                                                                                                     | The identifier type of the asset being sought                                                                                                                                          | CUSIP                                                                                                                                                                                  |