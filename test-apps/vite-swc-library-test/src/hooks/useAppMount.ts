import { useTheme } from '@arpitmalik832/react-ts-vite-swc-monorepo-library';
import useInitAxios from './useInitAxios';

function useAppMount() {
  useTheme();
  useInitAxios();
}

export default useAppMount;
