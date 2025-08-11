# AuditType

The audit record type, one of:
- `AUDIT_TYPE_UNSPECIFIED` - Default/Null audit type.
- `INVESTIGATION_REQUEST_UPDATE` - Used to update an investigation request.
- `INVESTIGATION_STATE` - Used for recording investigation state changed events.
- `COMMENT` - Used for adding a comment to investigation.

## Example Usage

```typescript
import { AuditType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AuditType = AuditType.InvestigationRequestUpdate;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                         | Value                        |
| ---------------------------- | ---------------------------- |
| `AuditTypeUnspecified`       | AUDIT_TYPE_UNSPECIFIED       |
| `InvestigationRequestUpdate` | INVESTIGATION_REQUEST_UPDATE |
| `InvestigationState`         | INVESTIGATION_STATE          |
| `Comment`                    | COMMENT                      |
| -                            | `Unrecognized<string>`       |