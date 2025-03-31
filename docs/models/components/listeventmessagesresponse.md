# ListEventMessagesResponse

A response to a list events method

## Example Usage

```typescript
import { ListEventMessagesResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ListEventMessagesResponse = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `eventMessages`                                                                         | [components.EventMessage](../../models/components/eventmessage.md)[]                    | :heavy_minus_sign:                                                                      | The returned collection of events                                                       |                                                                                         |
| `nextPageToken`                                                                         | *string*                                                                                | :heavy_minus_sign:                                                                      | Page token used for pagination; Supplying a page token returns the next page of results | ZXhhbXBsZQo                                                                             |