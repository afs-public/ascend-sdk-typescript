# CouponType

Type of coupon rate

## Example Usage

```typescript
import { CouponType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CouponType = CouponType.CouponTypeZero;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                    | Value                   |
| ----------------------- | ----------------------- |
| `CouponTypeUnspecified` | COUPON_TYPE_UNSPECIFIED |
| `CouponTypeFixed`       | COUPON_TYPE_FIXED       |
| `CouponTypeZero`        | COUPON_TYPE_ZERO        |
| -                       | `Unrecognized<string>`  |