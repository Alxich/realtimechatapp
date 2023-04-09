import { Stack, Button, Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { SearchedUser } from "../../../../util/types";

interface ParticipantsProps {
  participants: Array<SearchedUser>;
  removeParticipant: (userId: string) => void;
}

const Participants: React.FC<ParticipantsProps> = ({
  participants,
  removeParticipant,
}) => {
  return (
    <Flex direction="row" mt={4} flexWrap="wrap" gap="10px">
      {participants.map((participant) => (
        <Stack
          key={participant.id}
          direction="row"
          align="center"
          bg="blackAlpha.200"
          borderRadius={4}
          p={3}
        >
          <Text color="whiteAlpha.900">{participant.username}</Text>
          <IoIosCloseCircleOutline
            size={20}
            cursor="pointer"
            color="#fff"
            onClick={() => removeParticipant(participant.id)}
          />
        </Stack>
      ))}
    </Flex>
  );
};
export default Participants;
