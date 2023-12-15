import {
  Activity,
  Computer,
  Lightbulb,
  Newspaper
} from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { H2, Paragraph, XGroup, YStack } from "tamagui";

import { MyCard } from "../components/MyCard";
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
        <XGroup
          flexWrap="wrap"
          justifyContent="center"
        >
          <MyCard
            title="Facts"
            onPress={() => router.push("facts")}
            icon={() => <Activity size="$3" />}
          />
          <MyCard
            title="News"
            onPress={() => router.push("news")}
            icon={() => <Newspaper size="$3" />}
          />
          <MyCard
            title="Tech"
            onPress={() => router.push("news")}
            icon={() => <Computer size="$3" />}
          />
          <MyCard
            title="Tips"
            onPress={() => router.push("news")}
            icon={() => <Lightbulb size="$3" />}
          />
        </XGroup>
      </YStack>
    </MyStack>
  );
}
