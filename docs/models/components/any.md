# Any

Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.

## Example Usage

```typescript
import { Any } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Any = {};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `atType`                            | *string*                            | :heavy_minus_sign:                  | The type of the serialized message. |
| `additionalProperties`              | Record<string, *any*>               | :heavy_minus_sign:                  | N/A                                 |