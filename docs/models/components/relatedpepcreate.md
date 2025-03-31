# RelatedPepCreate

Detail around the related politically exposed Person

## Example Usage

```typescript
import { RelatedPepCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RelatedPepCreate = {
  organization: "U.S. Embassy",
  pepName: "Juan Octavio",
  title: "U.S. Ambassador to Japan",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `immediateFamilyMembers`                                                                                           | [components.ImmediateFamilyMemberCreate](../../models/components/immediatefamilymembercreate.md)[]                 | :heavy_minus_sign:                                                                                                 | Information about the immediate family members of the related politically exposed person                           |                                                                                                                    |
| `organization`                                                                                                     | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The organization a politically exposed person is associated with causing them to be considered politically exposed | U.S. Embassy                                                                                                       |
| `pepName`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The name of the related politically exposed person                                                                 | Juan Octavio                                                                                                       |
| `title`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The title of the related politically exposed person                                                                | U.S. Ambassador to Japan                                                                                           |