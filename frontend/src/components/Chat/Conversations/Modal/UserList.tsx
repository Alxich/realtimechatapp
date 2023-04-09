import { Avatar, Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { SearchedUser } from "../../../../util/types";

interface UserListProps {
  users: Array<SearchedUser>;
  participants: Array<SearchedUser>;
  addParticipant: (user: SearchedUser) => void;
}

const UserList: React.FC<UserListProps> = ({
  users,
  participants,
  addParticipant,
}) => {
  return (
    <>
      {users.length === 0 ? (
        <Flex mt={6} justify="center" color="whiteAlpha.700">
          <Text>No users found</Text>
        </Flex>
      ) : (
        <Stack mt={6}>
          {users.map((user) => (
            <Stack
              key={user.username}
              direction="row"
              align="center"
              spacing={4}
              py={2}
              px={4}
              borderRadius={4}
              _hover={{ bg: "blackAlpha.200" }}
            >
              <Avatar />
              <Flex justify="space-between" alignItems="center" width="100%">
                <Text color="whiteAlpha.900">{user.username}</Text>
                <Button
                  bg="brand.100"
                  _hover={{ bg: "brand.100" }}
                  color="whiteAlpha.900"
                  disabled={
                    !!participants.find(
                      (participant) => participant.id === user.id
                    )
                  }
                  onClick={() => addParticipant(user)}
                >
                  Select
                </Button>
              </Flex>
            </Stack>
          ))}
        </Stack>
      )}
    </>
  );
};
export default UserList;
