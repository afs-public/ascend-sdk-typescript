# DowJonesDate

Custom date object to present related Dow Jones dates because any value can be null, Month is represented randomly like June, Jun, 6 etc. etc.

## Example Usage

```typescript
import { DowJonesDate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: DowJonesDate = {};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `day`              | *string*           | :heavy_minus_sign: | Day                | 1                  |
| `month`            | *string*           | :heavy_minus_sign: | Month              | June               |
| `year`             | *string*           | :heavy_minus_sign: | Year               | 2020               |