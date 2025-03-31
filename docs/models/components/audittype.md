# AuditType

The type of audit that was performed on the investigation

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