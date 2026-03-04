# AlternativeOrdersCreateAlternativeOrderRequest

## Example Usage

```typescript
import { AlternativeOrderCreateIdentifierType, AlternativeOrderCreateSide } from "@apexfintechsolutions/ascend-sdk/models/components";
import { AlternativeOrdersCreateAlternativeOrderRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AlternativeOrdersCreateAlternativeOrderRequest = {
  accountId: "01JR8YQT40WAQT8S95ZQGS1QN0",
  alternativeOrderCreate: {
    clientOrderId: "f5074670-1b25-439f-9b5c-702027660800",
    identifier: "8395",
    identifierType: AlternativeOrderCreateIdentifierType.AssetId,
    side: AlternativeOrderCreateSide.Buy,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `accountId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | The account id.                                                                        | 01JR8YQT40WAQT8S95ZQGS1QN0                                                             |
| `alternativeOrderCreate`                                                               | [components.AlternativeOrderCreate](../../models/components/alternativeordercreate.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |