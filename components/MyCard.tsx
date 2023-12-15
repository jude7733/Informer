import { Card, H4 } from "tamagui";

export const MyCard = ({ title, onPress, icon }) => (
  <Card
    onPress={onPress}
    size="$8"
    width="$13"
    alignItems="center"
    margin="$2"
    focusTheme
    animation="quick"
    theme="active"
    elevate
    pressStyle={{ scale: 0.775 }}
  >
    <Card.Header>
      <H4>{title}</H4>
    </Card.Header>
    <Card.Background>{icon()}</Card.Background>
  </Card>
);
