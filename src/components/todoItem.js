import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Heading,
  Button,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";

export default function TodoItem({ title, id, isTodo }) {
  return (
    <div>
      <Card maxW="sm">
        <CardBody>
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>comment 1</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="2">
            {!isTodo && (
              <Button variant="solid" colorScheme="blue">
                Done
              </Button>
            )}
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
}
