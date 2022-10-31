import { fireEvent, renderHook } from "@testing-library/react";
import useKeyDown from "../hooks/useKeyDown";
import { useOutsideClick } from "../hooks/useOutsideClick";

describe("useOutsideClick", () => {
  test("should call hook", () => {
    const toggleVisible = jest.fn();

    const target = document.createElement("div");
    document.body.appendChild(target);

    const outside = document.createElement("div");
    document.body.appendChild(outside);
    outside.onclick = toggleVisible;

    const { result, unmount } = renderHook(() => useOutsideClick(false));

    expect(result.current.isVisible).toBe(false);
    expect(toggleVisible).toHaveBeenCalledTimes(0);
    fireEvent.click(outside);
    expect(toggleVisible).toHaveBeenCalledTimes(1);

    fireEvent.click(target);
    expect(toggleVisible).toHaveBeenCalledTimes(1);

    // Тестируем, что "removeEventListener" проверяя после размонтирования, что коллбэк вызывался только один раз.
    jest.spyOn(document, "removeEventListener");
    unmount();
    expect(document.removeEventListener).toHaveBeenCalledTimes(1);
  });
});

describe("useKeyDown test", () => {
  test("should call func on Escape", () => {
    const func = jest.fn();
    const event = new KeyboardEvent("keydown", { key: "Escape" });
    const { result, unmount } = renderHook(() => useKeyDown("Escape", func));

    expect(func).toHaveBeenCalledTimes(0);
    fireEvent(document, event);
    expect(func).toHaveBeenCalledTimes(1);
    fireEvent(document, event);
    expect(func).toHaveBeenCalledTimes(2);

    jest.spyOn(document, "removeEventListener");
    expect(document.removeEventListener).toHaveBeenCalledTimes(0);
    unmount();
    expect(document.removeEventListener).toHaveBeenCalledTimes(1);
  });

  test("shouldnt call func on wrong key", () => {
    const func = jest.fn();
    const event = new KeyboardEvent("keydown", { key: "Space" });
    const { result, unmount } = renderHook(() => useKeyDown("Escape", func));

    expect(func).toHaveBeenCalledTimes(0);
    fireEvent(document, event);
    expect(func).toHaveBeenCalledTimes(0);

    jest.spyOn(document, `removeEventListener`);
    expect(document.removeEventListener).toHaveBeenCalledTimes(0);
    unmount();
    expect(document.removeEventListener).toHaveBeenCalledTimes(1);
  });
});
