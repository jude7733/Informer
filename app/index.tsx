import { useRouter } from "expo-router";
import {
  Button,
  H2,
  ListItem,
  Paragraph,
  Separator,
  YGroup,
  YStack
} from "tamagui";

import { MyStack } from "../components/MyStack";

export default function Home() {
  const router = useRouter();

  return (
    <MyStack>
      <YStack
        space="$5"
        maxWidth={600}
      >
        <H2 textAlign="center">Informer</H2>
        <Paragraph textAlign="center">Some random infomation</Paragraph>
      </YStack>
    </MyStack>
  );
}
