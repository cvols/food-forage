import { useAuthStore } from '../../stores/useAuthStore';
import { Container, ImageBackground, TouchableOpacity, Text } from './Styles';

export default function LoginScreen() {
  const createUser = useAuthStore((state) => state.createUser);
  const logout = useAuthStore((state) => state.logout);
  const login = useAuthStore((state) => state.login);
  const signInWithGoogle = useAuthStore((state) => state.signInWithGoogle);
  const email = 'chris.volonnino@gmail.com';
  const password = 'Sweetflow22';

  return (
    <Container>
      <ImageBackground resizeMode="cover" source={{ uri: 'https://tinder.com/static/tinder.png' }}>
        <TouchableOpacity onPress={() => login(email, password)}>
          <Text>Sign in & get swiping</Text>
        </TouchableOpacity>
      </ImageBackground>
    </Container>
  );
}
