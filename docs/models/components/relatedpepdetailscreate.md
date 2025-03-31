# RelatedPepDetailsCreate

Details surrounding the related politically exposed persons

## Example Usage

```typescript
import { RelatedPepDetailsCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RelatedPepDetailsCreate = {
  directOrIndirectRelatedPeps: true,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `directOrIndirectRelatedPeps`                                                                         | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | Indication as to whether or not an account has direct or indirect related politically exposed persons | true                                                                                                  |
| `relatedPeps`                                                                                         | [components.RelatedPepCreate](../../models/components/relatedpepcreate.md)[]                          | :heavy_minus_sign:                                                                                    | Related Peps                                                                                          |                                                                                                       |