# RelatedPep

Detail around the related politically exposed Person

## Example Usage

```typescript
import { RelatedPep } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RelatedPep = {};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `immediateFamilyMembers`                                                                                           | [components.ImmediateFamilyMember](../../models/components/immediatefamilymember.md)[]                             | :heavy_minus_sign:                                                                                                 | Information about the immediate family members of the related politically exposed person                           |                                                                                                                    |
| `organization`                                                                                                     | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The organization a politically exposed person is associated with causing them to be considered politically exposed | U.S. Embassy                                                                                                       |
| `pepName`                                                                                                          | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The name of the related politically exposed person                                                                 | Juan Octavio                                                                                                       |
| `title`                                                                                                            | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The title of the related politically exposed person                                                                | U.S. Ambassador to Japan                                                                                           |