# RetrieveFixedIncomeMarksResponse

List of objects with the most recently observed mark per security

## Example Usage

```typescript
import { RetrieveFixedIncomeMarksResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RetrieveFixedIncomeMarksResponse = {};
```

## Fields

| Field                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assetMarks`                                                                                                                                                                                                                                 | [components.RetrieveFixedIncomeMarksResponseAssetMark](../../models/components/retrievefixedincomemarksresponseassetmark.md)[]                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                           | The list of mark data for each of the requested assets found. This may not be returned in the same order as the identifiers were provided, and will only return mark data for the distinct set of assets matching the requested identifiers. |