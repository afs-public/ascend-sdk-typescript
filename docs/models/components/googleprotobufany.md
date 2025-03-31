# GoogleProtobufAny

Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.

## Example Usage

```typescript
import { GoogleProtobufAny } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: GoogleProtobufAny = {};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `atType`                            | *string*                            | :heavy_minus_sign:                  | The type of the serialized message. |
| `additionalProperties`              | Record<string, *any*>               | :heavy_minus_sign:                  | N/A                                 |