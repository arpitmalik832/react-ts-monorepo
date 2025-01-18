import { useTheme } from '@arpitmalik832/react-ts-rollup-monorepo-library';
import useInitAxios from './useInitAxios';

function useAppMount() {
  useTheme();
  useInitAxios();
}

export default useAppMount;
