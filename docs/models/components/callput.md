# CallPut

Indicates whether the option is a Call or a Put. A Put entitles the holder to sell shares at the specified strike_price, while a Call entitles the holder to buy shares at the specified strike_price.

## Example Usage

```typescript
import { CallPut } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CallPut = CallPut.Call;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `CallPutUnspecified`   | CALL_PUT_UNSPECIFIED   |
| `Call`                 | CALL                   |
| `Put`                  | PUT                    |
| -                      | `Unrecognized<string>` |