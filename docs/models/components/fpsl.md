# Fpsl

Used to record the movements of shares to/ from the fpsl memo location and details related to the fpsl memo

## Example Usage

```typescript
import { Fpsl } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Fpsl = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `action`                                                                 | [components.EntryFpslAction](../../models/components/entryfpslaction.md) | :heavy_minus_sign:                                                       | Indicates whether shares are being allocated or deallocated              | ALLOCATE                                                                 |