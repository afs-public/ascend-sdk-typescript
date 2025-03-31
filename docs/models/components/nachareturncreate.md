# NachaReturnCreate

A return on an ACH transfer from the Nacha network.

## Example Usage

```typescript
import { NachaReturnCreate, NachaReturnCreateCode } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: NachaReturnCreate = {
  code: NachaReturnCreateCode.R47,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `code`                                                                               | [components.NachaReturnCreateCode](../../models/components/nachareturncreatecode.md) | :heavy_check_mark:                                                                   | The cause of the return.                                                             | RO1                                                                                  |