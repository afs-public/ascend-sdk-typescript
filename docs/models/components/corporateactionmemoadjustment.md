# CorporateActionMemoAdjustment

Object containing metadata for memo locations that have been adjusted due to a corporate action

## Example Usage

```typescript
import { CorporateActionMemoAdjustment } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CorporateActionMemoAdjustment = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `corporateActionId`                                                                                      | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | This field serves as a unique identifier for the specific corporate action linked to the memo adjustment | 29336T100AB24                                                                                            |
| `corporateActionType`                                                                                    | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Used to capture the specific type of corporate action related to the memo adjustment                     | Cash_DIVIDEND                                                                                            |