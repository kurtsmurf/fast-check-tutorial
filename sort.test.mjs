import { expect, test } from "vitest";
import { sortNumbersAscending } from "./sort.mjs";
import fc from "fast-check";

test("should sort numeric elements from the smallest to the largest one", () => {
  fc.assert(
    fc.property(fc.array(fc.integer()), (data) => {
      const sortedData = sortNumbersAscending(data);
      for (let i = 1; i < data.length; ++i) {
        expect(sortedData[i - 1]).toBeLessThanOrEqual(sortedData[i]);
      }
    }),
  );
});
