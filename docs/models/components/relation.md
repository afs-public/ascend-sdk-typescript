# Relation

The relation of the Research Document to the Pre IPO Company. - `SUBJECT`: The Research Document is directly related to the Pre IPO Company. - `CONNECTED`: The Research Document is not directly related to the Pre IPO Company but is related to another company in a "connected" field or industry.

## Example Usage

```typescript
import { Relation } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Relation = Relation.Connected;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `RelationUnspecified`  | RELATION_UNSPECIFIED   |
| `Subject`              | SUBJECT                |
| `Connected`            | CONNECTED              |
| -                      | `Unrecognized<string>` |