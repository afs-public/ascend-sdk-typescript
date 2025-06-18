# AcceptTransferResponse

Response from accepting internal Ascend transfers. If this is the second side (delivering/receiving) of an internal transfer that is being accepted, bookkeeping is performed immediately and both sides of the internal transfer would be complete barring any errors.

## Example Usage

```typescript
import { AcceptTransferResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AcceptTransferResponse = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `transfer`                                                 | [components.Transfer](../../models/components/transfer.md) | :heavy_minus_sign:                                         | The accepted transfer's resource                           |