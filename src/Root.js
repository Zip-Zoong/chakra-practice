import { Box, Button, HStack } from '@chakra-ui/react';
import { ImPencil2 } from 'react-icons/im';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <Box>
      <HStack
        justifyContent={'space-between'}
        py={5}
        px={10}
        borderBottomWidth={1}
      >
        <Box color="blue.400" border={'1px'} borderColor={'black'}>
          <ImPencil2 size={'48'} />
        </Box>
        <HStack spacing={2}>
          <Button onClick={() => console.log('login!!')}>Log in</Button>
          <Button colorScheme={'blue'} onClick={() => console.log('singup!!')}>
            Sign up
          </Button>
        </HStack>
      </HStack>

      <Outlet />
    </Box>
  );
}
