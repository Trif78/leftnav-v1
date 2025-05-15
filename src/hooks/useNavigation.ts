import { useNavigationContext } from '../contexts/NavigationContext';

export const useNavigation = () => {
  return useNavigationContext();
};