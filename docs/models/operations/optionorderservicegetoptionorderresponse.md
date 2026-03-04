# OptionOrderServiceGetOptionOrderResponse

## Example Usage

```typescript
import { OptionOrderServiceGetOptionOrderResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: OptionOrderServiceGetOptionOrderResponse = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `optionOrder`                                                                                    | [components.OptionOrder](../../models/components/optionorder.md)                                 | :heavy_minus_sign:                                                                               | OK                                                                                               |
| `status`                                                                                         | [components.Status](../../models/components/status.md)                                           | :heavy_minus_sign:                                                                               | INVALID_ARGUMENT: The account_id or the option_order_id could not be determined for the request. |