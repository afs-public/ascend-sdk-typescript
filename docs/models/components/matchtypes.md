# MatchTypes

## Example Usage

```typescript
import { MatchTypes } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: MatchTypes = MatchTypes.RelativeOrCloseAssociate;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `MatchTypeUnspecified`      | MATCH_TYPE_UNSPECIFIED      |
| `NonOfacSanctions`          | NON_OFAC_SANCTIONS          |
| `RelativeOrCloseAssociate`  | RELATIVE_OR_CLOSE_ASSOCIATE |
| `OfacSanctions`             | OFAC_SANCTIONS              |
| `PoliticallyExposedPerson`  | POLITICALLY_EXPOSED_PERSON  |
| `Dndb`                      | DNDB                        |
| `NegativeNews`              | NEGATIVE_NEWS               |
| -                           | `Unrecognized<string>`      |