# EndLargeTraderRequestCreate

The request to end a Large Trader on a Legal Natural Person/Legal Entity.

## Example Usage

```typescript
import { EndLargeTraderRequestCreate, EndReason } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EndLargeTraderRequestCreate = {
  endReason: EndReason.EventReasonEnded,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `endReason`                                                  | [components.EndReason](../../models/components/endreason.md) | :heavy_check_mark:                                           | The end reason of the LTID.                                  | EVENT_REASON_ENDED                                           |