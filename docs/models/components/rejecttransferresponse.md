# RejectTransferResponse

Response from rejecting internal Ascend transfers. If this is the first side (delivering/receiving) of an internal transfer that is being rejected, the contra side would be implicitly rejected at the same time.

## Example Usage

```typescript
import { RejectTransferResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RejectTransferResponse = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `transfer`                                                                                             | [components.RejectTransferResponseTransfer](../../models/components/rejecttransferresponsetransfer.md) | :heavy_minus_sign:                                                                                     | The rejected transfer's resource                                                                       |