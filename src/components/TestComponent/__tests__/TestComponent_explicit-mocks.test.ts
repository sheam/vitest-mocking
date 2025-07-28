import { TestComponent } from "@components/TestComponent/TestComponent";

// THIS WORKS
vi.mock(
  "@urls/appUrls/useAppUrls",
  () => import("@urls/appUrls/ __mocks__/useAppUrls"),
);

describe("explicit __mocks__", () => {
  // should pass
  it("app url test", () => {
    const result = TestComponent();
    expect(result).toContain('title="Sales Orders MOCK"');
  });
});
