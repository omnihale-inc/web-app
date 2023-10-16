import cors from 'cors';

export function middleware() {
  cors({ origin: 'omnihale.com' });
}
