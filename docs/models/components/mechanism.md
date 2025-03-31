# Mechanism

Cash transfer mechanism to search constraints for

## Example Usage

```typescript
import { Mechanism } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Mechanism = Mechanism.Ach;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Ach`                  | ACH                    |
| `Ict`                  | ICT                    |
| -                      | `Unrecognized<string>` |