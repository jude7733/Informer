import { styled, ThemeableStack } from "tamagui";

export const MyStack = styled(ThemeableStack, {
  name: "MyStack",
  backgroundColor: "$backgroundStrong",
  flex: 1,
  justifyContent: "space-between",
  alignItems: "center",
  padding: "$4",
  space: "$true"
});
