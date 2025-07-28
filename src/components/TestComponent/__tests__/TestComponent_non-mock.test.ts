import { TestComponent } from "@components/TestComponent/TestComponent";

describe("no mocking", () => {
  it("app url test", () => {
    const result = TestComponent();
    expect(result).toContain('title="Sales Orders"');
  });
});
