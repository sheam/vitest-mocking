import { TestComponent } from "@components/TestComponent/TestComponent";

// The __mocks__ folder gets ignored
vi.mock("@urls/appUrls/useAppUrls");

describe("implied __mocks__", () => {
  // should pass
  it("app url test", () => {
    const result = TestComponent();
    expect(result).toContain('title="Sales Orders MOCK"');
  });
});
